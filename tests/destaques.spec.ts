import { test, expect } from '@playwright/test'
import fs from 'fs'
import path from 'path'

const DESTAQUES = [
  'o-que-e-kernel',
  '42-sp-basecamp',
  'o-que-e-domino-em-arquitetura-de-software',
  '42-get-next-line',
  'o-que-sao-migrations',
  'zen-da-programacao-com-ia',
]

const frontmatter = (folder: string) => {
  const dir = path.join(process.cwd(), 'src/content/blog', folder)
  const file = ['index.md', 'index.mdx']
    .map((name) => path.join(dir, name))
    .find((candidate) => fs.existsSync(candidate))
  return file ? fs.readFileSync(file, 'utf-8').split('---')[1] : ''
}

test.describe('Destaques', () => {
  test('exactly the chosen posts are marked', () => {
    const blog = path.join(process.cwd(), 'src/content/blog')
    const marked = fs
      .readdirSync(blog)
      .filter((entry) => fs.statSync(path.join(blog, entry)).isDirectory())
      .filter((folder) => /^destaque:\s*true/m.test(frontmatter(folder)))

    expect(marked.sort()).toEqual([...DESTAQUES].sort())
  })

  test('hub pages list their destaque first', async ({ page }) => {
    await page.goto('/topicos/fundamentos/')

    // Scope to post cards: breadcrumb items are list items too.
    const cards = page
      .locator('main li')
      .filter({ has: page.locator('a[href^="/blog/"]') })

    await expect(cards.first()).toContainText('Comece por aqui')
    await expect(
      cards.first().locator('a[href="/blog/o-que-e-kernel/"]'),
    ).toHaveCount(1)
  })

  test('a hub without destaques still lists its posts', async ({ page }) => {
    await page.goto('/topicos/carreira/')
    expect(
      await page.locator('main li a[href^="/blog/"]').count(),
    ).toBeGreaterThan(0)
    await expect(page.locator('main')).not.toContainText('Comece por aqui')
  })
})
