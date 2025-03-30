import { test, expect } from '@playwright/test'
import { SITE } from '@/consts'
import fs from 'fs'
import path from 'path'

// Get all blog post slugs from the content directory
const blogDir = path.join(process.cwd(), 'src/content/blog')
const postSlugs = fs
  .readdirSync(blogDir)
  .filter((file) => fs.statSync(path.join(blogDir, file)).isDirectory())

test.describe('Blog Posts', () => {
  // Setup before each test
  test.beforeEach(async ({ page }) => {
    // Reset the page state before each test
    await page.goto('about:blank')
  })

  // Create a test for each post
  for (const slug of postSlugs) {
    test(`should validate post: ${slug}`, async ({ page }) => {
      // Navigate to the post
      await page.goto(
        process.env.NODE_ENV === 'development'
          ? `http://localhost:4321/blog/${slug}/`
          : `${SITE.href}/blog/${slug}/`,
      )

      // Check page title exists and matches the expected format
      const title = await page.title()
      expect(title).toBeTruthy()

      // Validate main heading (H1)
      const h1 = page.locator('h1')
      await expect(h1).toBeVisible()
      const h1Text = await h1.textContent()
      expect(h1Text).toBeTruthy()

      // Validate description exists
      const metaDescription = page.locator('meta[name="description"]')
      await expect(metaDescription).toHaveAttribute('content')
      const description = await metaDescription.getAttribute('content')
      expect(description).toBeTruthy()

      // Validate at least one paragraph exists
      const paragraphs = page.locator('article p')
      const paragraphCount = await paragraphs.count()
      expect(paragraphCount).toBeGreaterThan(0)

      // Validate breadcrumbs
      const breadcrumbs = page.locator('[data-slot="breadcrumb-list"]')
      await expect(breadcrumbs).toBeVisible()
      await expect(breadcrumbs.getByText('Blog')).toBeVisible()

      // Validate reading time
      const readingTimeElement = page.getByText(/min de leitura/)
      await expect(readingTimeElement).toBeVisible()

      // Validate table of contents if headings exist
      const headings = page.locator('article h2, article h3, article h4')
      const headingsCount = await headings.count()

      if (headingsCount > 0) {
        // Wait for the table of contents to be hydrated
        await page.waitForSelector(
          '[data-testid="table-of-contents-summary"]',
          {
            state: 'visible',
            timeout: 5000,
          },
        )
        const tableOfContents = page.locator(
          '[data-testid="table-of-contents-summary"]',
        )
        await expect(tableOfContents).toBeVisible()
      }
    })
  }
})
