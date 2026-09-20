import { test, expect } from '@playwright/test'

const PAGES = ['/', '/blog/', '/blog/o-que-e-kernel/', '/livros/', '/sobre/']

test.describe('Zero-JS by default', () => {
  for (const path of PAGES) {
    test(`${path} hydrates no framework components`, async ({ page }) => {
      const scripts: string[] = []
      page.on('request', (request) => {
        if (request.resourceType() === 'script') scripts.push(request.url())
      })
      await page.goto(path)

      await expect(page.locator('astro-island')).toHaveCount(0)
      expect(
        scripts.filter((url) => /client\.[\w-]+\.js|react/i.test(url)),
      ).toEqual([])
    })
  }

  test('mobile menu opens and closes without hydration', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 780 })
    await page.goto('/')

    const menu = page.locator('details.md\\:hidden')
    const links = menu.locator('nav a')
    await expect(menu)
      .toHaveAttribute('open', /^$|true/, { timeout: 1 })
      .catch(() => undefined)
    expect(await menu.evaluate((el: HTMLDetailsElement) => el.open)).toBe(false)

    await menu.locator('summary').click()
    expect(await menu.evaluate((el: HTMLDetailsElement) => el.open)).toBe(true)
    await expect(links.first()).toBeVisible()
    expect(await links.count()).toBeGreaterThan(2)

    await menu.locator('summary').click()
    expect(await menu.evaluate((el: HTMLDetailsElement) => el.open)).toBe(false)
  })

  test('theme toggle switches and persists the theme', async ({ page }) => {
    await page.goto('/')
    const root = page.locator('html')
    const before = await root.evaluate((el) => el.classList.contains('dark'))

    await page.locator('#theme-toggle').click()
    await expect
      .poll(() => root.evaluate((el) => el.classList.contains('dark')))
      .toBe(!before)

    const stored = await page.evaluate(() => localStorage.getItem('theme'))
    expect(stored).toBe(before ? 'light' : 'dark')

    await page.reload()
    expect(await root.evaluate((el) => el.classList.contains('dark'))).toBe(
      !before,
    )
  })

  test('pagination links to the other pages', async ({ page }) => {
    await page.goto('/blog/2/')
    const nav = page.getByRole('navigation', { name: 'Paginação' })

    await expect(nav.locator('[aria-current="page"]')).toHaveText('2')
    await expect(nav.locator('a[rel="prev"]')).toHaveAttribute('href', '/blog/')
    await expect(nav.locator('a[rel="next"]')).toHaveAttribute(
      'href',
      '/blog/3/',
    )
  })

  test('disabled pagination controls are not links', async ({ page }) => {
    await page.goto('/blog/')
    const nav = page.getByRole('navigation', { name: 'Paginação' })

    await expect(nav.locator('a[rel="prev"]')).toHaveCount(0)
    await expect(nav.locator('a[rel="next"]')).toHaveCount(1)
    for (const href of await nav
      .locator('a')
      .evaluateAll((links) => links.map((link) => link.getAttribute('href')))) {
      expect(href).not.toMatch(/\/blog\/0\/$/)
    }
  })

  test('table of contents scrolls with CSS and highlights on scroll', async ({
    page,
  }) => {
    await page.goto('/blog/o-que-e-kernel/')
    const toc = page.locator('#table-of-contents')
    await expect(toc).toBeVisible()

    const scroller = page.locator('details div.overflow-y-auto').first()
    await expect(scroller).toHaveCSS('overflow-y', 'auto')
  })
})
