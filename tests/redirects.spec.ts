import { test, expect } from '@playwright/test'
import fs from 'fs'
import path from 'path'

type Redirect = { source: string; destination: string; permanent?: boolean }

const root = process.cwd()
const distDir = path.join(root, 'dist')
const { redirects } = JSON.parse(
  fs.readFileSync(path.join(root, 'vercel.json'), 'utf-8'),
) as { redirects: Redirect[] }

const builtPage = (urlPath: string) =>
  path.join(distDir, urlPath, 'index.html')

test.describe('Redirects (vercel.json)', () => {
  for (const { source, destination, permanent } of redirects) {
    test(`${source} -> ${destination}`, () => {
      expect(permanent, 'redirect must be permanent').toBe(true)
      expect(source).toMatch(/^\/.*\/$/)
      expect(destination).toMatch(/^\/.*\/$/)
      expect(
        fs.existsSync(builtPage(destination)),
        `destination ${destination} is not a built page`,
      ).toBe(true)
      expect(
        fs.existsSync(builtPage(source)),
        `source ${source} is also a built page`,
      ).toBe(false)
    })
  }

  test('build contains no meta-refresh redirect pages', () => {
    const htmlFiles = fs
      .readdirSync(distDir, { recursive: true, encoding: 'utf-8' })
      .filter((file) => file.endsWith('.html'))
    const refreshPages = htmlFiles.filter((file) =>
      /http-equiv="refresh"/i.test(
        fs.readFileSync(path.join(distDir, file), 'utf-8'),
      ),
    )
    expect(refreshPages).toEqual([])
  })
})
