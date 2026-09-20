import { test, expect } from '@playwright/test'
import fs from 'fs'
import path from 'path'

const TOPICOS = [
  'fundamentos',
  'escola-42',
  'inteligencia-artificial',
  'front-end',
  'back-end-e-arquitetura',
  'carreira',
  'ferramentas-e-automacao',
]

test.describe('Tópicos', () => {
  test('the index lists every tópico with a post count', async ({ page }) => {
    await page.goto('/topicos/')
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Tópicos')

    const links = page.locator('main a[href^="/topicos/"]')
    await expect(links).toHaveCount(TOPICOS.length)

    for (const id of TOPICOS) {
      const card = page.locator(`main a[href="/topicos/${id}/"]`)
      await expect(card).toHaveCount(1)
      await expect(card).toContainText(/\d+ posts?/)
    }
  })

  for (const id of TOPICOS) {
    test(`/topicos/${id}/ renders an intro and its posts`, async ({ page }) => {
      await page.goto(`/topicos/${id}/`)

      await expect(page.getByRole('heading', { level: 1 })).not.toBeEmpty()
      const intro = page.locator('.prose')
      await expect(intro).toBeVisible()
      expect((await intro.innerText()).split(/\s+/).length).toBeGreaterThan(20)

      const cards = page.locator('main li a[href^="/blog/"]')
      expect(await cards.count()).toBeGreaterThan(0)

      const blocks = await page
        .locator('script[type="application/ld+json"]')
        .allTextContents()
      const types = blocks
        .flatMap((block) => JSON.parse(block))
        .map((entry) => entry['@type'])
      expect(types).toEqual(
        expect.arrayContaining(['CollectionPage', 'BreadcrumbList']),
      )
    })
  }

  test('every post links to its tópico and declares it as a section', async ({
    page,
  }) => {
    await page.goto('/blog/o-que-e-kernel/')

    const crumb = page.locator(
      '[data-slot="breadcrumb-link"][href^="/topicos/"]',
    )
    await expect(crumb).toHaveCount(1)
    await expect(page.locator('meta[property="article:section"]')).toHaveCount(
      1,
    )
  })

  test('every post in the build has a tópico', () => {
    const blog = path.join(process.cwd(), 'src/content/blog')
    const missing = fs
      .readdirSync(blog)
      .filter((entry) => fs.statSync(path.join(blog, entry)).isDirectory())
      .filter((folder) => {
        const file = ['index.md', 'index.mdx']
          .map((name) => path.join(blog, folder, name))
          .find((candidate) => fs.existsSync(candidate))
        return !file || !/^topico:\s*\S+/m.test(fs.readFileSync(file, 'utf-8'))
      })

    expect(missing).toEqual([])
  })

  test('the sitemap lists the tópico pages', () => {
    const sitemap = fs.readFileSync(
      path.join(process.cwd(), 'dist/sitemap-0.xml'),
      'utf-8',
    )
    for (const id of TOPICOS) {
      expect(sitemap).toContain(`https://segredo.dev/topicos/${id}/`)
    }
    expect(sitemap).toContain('https://segredo.dev/topicos/')
  })
})
