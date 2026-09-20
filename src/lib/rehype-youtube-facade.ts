import type { Root } from 'hast'
import { visit } from 'unist-util-visit'

/**
 * Matches a raw YouTube iframe, with either quote style, on youtube.com or
 * youtube-nocookie.com, and with an absolute or protocol-relative URL.
 */
const YOUTUBE_IFRAME =
  /<iframe\b[^>]*\bsrc=(["'])((?:https?:)?\/\/(?:www\.)?youtube(?:-nocookie)?\.com\/embed\/([^"'?#]+)[^"']*)\1[^>]*>\s*<\/iframe>/g

const EMBED_HOST = /youtube(-nocookie)?\.com\/embed\//

const escapeAttribute = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;')

/**
 * Replaces raw YouTube iframes in Markdown with a thumbnail facade.
 *
 * The real player (and its scripts and cookies) only loads when a reader
 * clicks. Without JavaScript the facade is still a link to YouTube.
 *
 * Note: MDX turns raw HTML into JSX rather than `raw` nodes, so embeds in
 * .mdx files are not transformed.
 */
export function rehypeYoutubeFacade() {
  return (tree: Root) => {
    visit(tree, 'raw', (node: { value: string }) => {
      if (!EMBED_HOST.test(node.value)) return

      node.value = node.value.replace(
        YOUTUBE_IFRAME,
        (_match, _quote: string, rawSrc: string, id: string) => {
          const src = new URL(
            rawSrc.startsWith('//') ? `https:${rawSrc}` : rawSrc,
          )
          src.searchParams.set('autoplay', '1')

          return `<div class="yt-facade" data-yt-src="${escapeAttribute(src.href)}">
  <a href="https://www.youtube.com/watch?v=${encodeURIComponent(id)}" target="_blank" rel="noopener noreferrer">
    <img src="https://i.ytimg.com/vi/${encodeURIComponent(id)}/hqdefault.jpg" alt="Assistir no YouTube" width="480" height="360" loading="lazy" decoding="async" />
    <span class="yt-facade-play" aria-hidden="true"></span>
    <span class="sr-only">Assistir no YouTube</span>
  </a>
</div>`
        },
      )
    })
  }
}
