import { test, expect } from '@playwright/test'
import { SITE } from '@/consts'
type MetaTag = {
  property?: string
  name?: string
  expected?: string
}

const homeUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:4321'
    : `${SITE.href}`

test('should navigate to the home page and validate content', async ({
  page,
}) => {
  // Navigate to home page
  await page.goto(homeUrl)

  // Check page title
  await expect(page).toHaveTitle('Inicio | segredo.dev')

  // Validate main heading and subtitle
  const heading = page.getByRole('heading', { name: 'segredo.dev' })
  await expect(heading).toBeVisible()
  await expect(heading).toHaveClass(/text-3xl/)

  const subtitle = page.getByText('tecnologia e estudos')
  await expect(subtitle).toBeVisible()
  await expect(page.getByText('@iaurg')).toBeVisible()

  // Validate learn in public link
  const learnInPublicLink = page.getByRole('link', { name: 'learn in public' })
  await expect(learnInPublicLink).toBeVisible()
  await expect(learnInPublicLink).toHaveAttribute(
    'href',
    '/blog/aprenda-em-publico/',
  )
  await expect(learnInPublicLink).toHaveAttribute('target', '_self')

  // Validate "Últimos posts" section
  const latestPostsHeading = page.getByRole('heading', {
    name: 'Últimos posts',
  })
  await expect(latestPostsHeading).toBeVisible()
  await expect(latestPostsHeading).toHaveClass(/text-2xl/)

  // Validate "Ver todos os posts" button
  const viewAllPostsButton = page.getByRole('link', {
    name: 'Ver todos os posts',
  })
  await expect(viewAllPostsButton).toBeVisible()
  await expect(viewAllPostsButton).toHaveAttribute('href', '/blog/')
})

test('should validate SEO best practices on homepage', async ({ page }) => {
  // Navigate to home page
  await page.goto(homeUrl)

  // Check meta description
  const metaDescriptions = page.locator('meta[name="description"]')
  const descriptionCount = await metaDescriptions.count()
  expect(descriptionCount).toBeGreaterThan(0)

  // Get the first meta description and check its content
  const firstDescription = metaDescriptions.first()
  const descriptionContent = await firstDescription.getAttribute('content')
  expect(descriptionContent).not.toBeNull()
  expect(descriptionContent?.length).toBeGreaterThan(0)

  // Check canonical URL
  const canonicalUrls = page.locator('link[rel="canonical"]')
  const canonicalCount = await canonicalUrls.count()
  expect(canonicalCount).toBe(1)
  await expect(canonicalUrls.first()).toHaveAttribute('href', homeUrl)

  // Check Open Graph tags
  const ogTags: Record<string, MetaTag> = {
    title: { property: 'og:title', expected: 'Inicio | segredo.dev' },
    description: { property: 'og:description' },
    url: { property: 'og:url', expected: homeUrl },
    type: { property: 'og:type', expected: 'website' },
  }

  for (const [_, tag] of Object.entries(ogTags)) {
    const selector = tag.property
      ? `meta[property="${tag.property}"]`
      : `meta[name="${tag.name}"]`
    const element = page.locator(selector)
    const count = await element.count()
    expect(count).toBeGreaterThan(0)

    if (tag.expected) {
      await expect(element.first()).toHaveAttribute('content', tag.expected)
    } else {
      const content = await element.first().getAttribute('content')
      expect(content).not.toBeNull()
      expect(content?.length).toBeGreaterThan(0)
    }
  }

  // Check Twitter Card tags
  const twitterTags: Record<string, MetaTag> = {
    card: { name: 'twitter:card', expected: 'summary_large_image' },
    title: { name: 'twitter:title', expected: 'Inicio | segredo.dev' },
    description: { name: 'twitter:description' },
  }

  for (const [_, tag] of Object.entries(twitterTags)) {
    const selector = tag.property
      ? `meta[property="${tag.property}"]`
      : `meta[name="${tag.name}"]`
    const element = page.locator(selector)
    const count = await element.count()
    expect(count).toBeGreaterThan(0)

    if (tag.expected) {
      await expect(element.first()).toHaveAttribute('content', tag.expected)
    } else {
      const content = await element.first().getAttribute('content')
      expect(content).not.toBeNull()
      expect(content?.length).toBeGreaterThan(0)
    }
  }

  // Check structured data (JSON-LD)
  const jsonLdScripts = page.locator('script[type="application/ld+json"]')
  const jsonLdCount = await jsonLdScripts.count()
  expect(jsonLdCount).toBeGreaterThan(0)

  // Validate main content structure
  const mainContent = page.locator('main')
  await expect(mainContent).toBeVisible()

  // Check heading hierarchy
  const h1 = page.locator('h1')
  const h1Count = await h1.count()
  expect(h1Count).toBe(1)

  const h2 = page.locator('h2')
  const h2Count = await h2.count()
  expect(h2Count).toBe(1)
  await expect(h2.first()).toHaveText('Últimos posts')

  // Check image alt texts
  const images = page.locator('img')
  const imageCount = await images.count()
  for (let i = 0; i < imageCount; i++) {
    const image = images.nth(i)
    const alt = await image.getAttribute('alt')
    expect(alt).not.toBeNull()
    expect(alt?.length).toBeGreaterThan(0)
  }

  // Check language attribute
  const html = page.locator('html')
  await expect(html).toHaveAttribute('lang', 'pt-BR')
})
