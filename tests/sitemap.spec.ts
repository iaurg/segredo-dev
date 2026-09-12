import { test, expect } from '@playwright/test'
import fs from 'fs'
import path from 'path'

const sitemapUrls = () =>
  fs
    .readdirSync(path.join(process.cwd(), 'dist'))
    .filter((file) => /^sitemap-\d+\.xml$/.test(file))
    .flatMap((file) =>
      [
        ...fs
          .readFileSync(path.join(process.cwd(), 'dist', file), 'utf-8')
          .matchAll(/<loc>([^<]+)<\/loc>/g),
      ].map((match) => match[1]),
    )

test.describe('Crawl surface', () => {
  test('sitemap lists no removed or non-indexable pages', () => {
    const urls = sitemapUrls()
    expect(urls.length).toBeGreaterThan(0)
    expect(urls.filter((url) => /\/(videos|autores)\/|404/.test(url))).toEqual(
      [],
    )
  })

  test('robots.txt allows everything and points at the sitemap', async ({
    request,
  }) => {
    const response = await request.get('/robots.txt')
    expect(response.status()).toBe(200)
    const body = await response.text()
    expect(body).not.toContain('Disallow')
    expect(body).toContain('Sitemap: https://segredo.dev/sitemap-index.xml')
  })

  test('removed landing pages return 404', async ({ request }) => {
    for (const url of [
      '/videos/v1/',
      '/videos/materiais/',
      '/videos/sucesso/',
    ]) {
      expect((await request.get(url)).status(), url).toBe(404)
    }
  })
})
