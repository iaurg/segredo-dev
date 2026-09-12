import { test, expect, type Page } from '@playwright/test'

const SITE_URL = 'https://segredo.dev/'

const jsonLdTypes = async (page: Page) => {
  const blocks = await page
    .locator('script[type="application/ld+json"]')
    .allTextContents()
  return blocks
    .flatMap((block) => {
      const data = JSON.parse(block)
      return Array.isArray(data) ? data : [data]
    })
    .map((entry) => entry['@type'])
}

test.describe('SEO metadata', () => {
  for (const path of ['/', '/blog/', '/blog/o-que-e-kernel/', '/sobre/', '/livros/']) {
    test(`${path} has absolute social images, valid JSON-LD, no security metas`, async ({
      page,
    }) => {
      await page.goto(path)

      for (const selector of [
        'meta[property="og:image"]',
        'meta[name="twitter:image"]',
      ]) {
        const content = await page.locator(selector).getAttribute('content')
        expect(content, selector).toMatch(new RegExp(`^${SITE_URL}`))
      }

      const types = await jsonLdTypes(page)
      expect(types).toContain('WebSite')

      await expect(page).toHaveTitle(/\S/)
      await expect(page.locator('meta[name="robots"]')).toHaveCount(0)
      await expect(page.locator('meta[http-equiv]')).toHaveCount(0)
    })
  }

  test('posts are articles with BlogPosting and BreadcrumbList', async ({
    page,
  }) => {
    await page.goto('/blog/o-que-e-kernel/')

    await expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
      'content',
      'article',
    )
    await expect(
      page.locator('meta[property="article:published_time"]'),
    ).toHaveAttribute('content', /^\d{4}-\d{2}-\d{2}T/)
    await expect(
      page.locator('meta[property="article:modified_time"]'),
    ).toHaveAttribute('content', /^\d{4}-\d{2}-\d{2}T/)

    const types = await jsonLdTypes(page)
    expect(types).toEqual(
      expect.arrayContaining(['BlogPosting', 'BreadcrumbList']),
    )
  })

  test('about page describes the author as a Person', async ({ page }) => {
    await page.goto('/sobre/')
    await expect(page).toHaveTitle('Sobre | segredo.dev')
    expect(await jsonLdTypes(page)).toContain('Person')
  })

  test('pagination pages have distinct titles', async ({ page }) => {
    await page.goto('/blog/2/')
    await expect(page).toHaveTitle('Blog – página 2 | segredo.dev')
  })

  test('404 page is noindex', async ({ page }) => {
    const response = await page.goto('/pagina-que-nao-existe/')
    expect(response?.status()).toBe(404)
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      'content',
      /noindex/,
    )
  })
})
