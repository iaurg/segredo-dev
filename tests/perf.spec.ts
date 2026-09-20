import { test, expect, type Page } from '@playwright/test'

const blockedPattern = /cdn\.jsdelivr\.net|katex/i

const collectRequests = (page: Page) => {
  const urls: string[] = []
  page.on('request', (request) => urls.push(request.url()))
  return urls
}

test.describe('KaTeX removal and LCP fixes', () => {
  for (const path of ['/', '/blog/o-que-e-kernel/']) {
    test(`${path} loads no KaTeX or jsDelivr resources`, async ({ page }) => {
      const requests = collectRequests(page)
      await page.goto(path)

      expect(requests.filter((url) => blockedPattern.test(url))).toEqual([])
      expect(await page.content()).not.toMatch(blockedPattern)
    })

    test(`${path} preloads the Geist variable font`, async ({ page }) => {
      await page.goto(path)
      await expect(
        page.locator('link[rel="preload"][href="/fonts/GeistVF.woff2"]'),
      ).toHaveAttribute('as', 'font')
    })
  }

  test('post cover image is eager and high priority', async ({ page }) => {
    await page.goto('/blog/o-que-e-kernel/')
    const cover = page.locator('main img.max-w-5xl').first()
    await expect(cover).toHaveAttribute('fetchpriority', 'high')
    await expect(cover).not.toHaveAttribute('loading', 'lazy')
  })

  test('home loads the first card image eagerly and the rest lazily', async ({
    page,
  }) => {
    await page.goto('/')
    // Cover images only: author avatars are separate <img> elements in each card.
    const cardImages = page.locator('main li img.object-cover')
    await expect(cardImages.first()).toHaveAttribute('loading', 'eager')
    await expect(cardImages.first()).toHaveAttribute('fetchpriority', 'high')

    const count = await cardImages.count()
    for (let i = 1; i < count; i++) {
      await expect(cardImages.nth(i)).toHaveAttribute('loading', 'lazy')
    }
  })
})
