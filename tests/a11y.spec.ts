import { test, expect } from '@playwright/test'
import fs from 'fs'
import path from 'path'

const INTERACTIVE = /<(a|button|summary)\b([^>]*)>(.*?)<\/\1>/gis

/**
 * An interactive element needs an accessible name: visible text, an
 * aria-label, a title, or visually hidden text. Icon-only controls are the
 * usual offenders, and screen readers and AI agents both depend on this.
 */
const hasAccessibleName = (attrs: string, inner: string) => {
  if (/\baria-label=/.test(attrs) || /\btitle=/.test(attrs)) return true
  if (/aria-hidden="true"/.test(attrs)) return true
  if (/sr-only/.test(inner)) return true
  const text = inner
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/gi, ' ')
    .trim()
  return text.length > 0
}

test('every link and button in the build has an accessible name', () => {
  const dist = path.join(process.cwd(), 'dist')
  const offenders: string[] = []

  for (const file of fs
    .readdirSync(dist, { recursive: true, encoding: 'utf-8' })
    .filter((name) => name.endsWith('.html'))) {
    const html = fs.readFileSync(path.join(dist, file), 'utf-8')
    for (const [, tag, attrs, inner] of html.matchAll(INTERACTIVE)) {
      if (!hasAccessibleName(attrs, inner)) {
        offenders.push(`${file}: <${tag} ${attrs.trim().slice(0, 80)}>`)
      }
    }
  }

  expect(offenders.slice(0, 10)).toEqual([])
})
