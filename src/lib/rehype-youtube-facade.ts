import type { Root } from 'hast'
import { visit } from 'unist-util-visit'

const YOUTUBE_IFRAME =
  /<iframe\b[^>]*\bsrc="https:\/\/www\.youtube\.com\/embed\/([^"?]+)([^"]*)"[^>]*><\/iframe>/g

/**
 * Replaces raw YouTube iframes in Markdown with a thumbnail facade.
 *
 * The real player (and its ~500 KB of scripts and cookies) only loads when a
 * reader clicks. Without JavaScript the facade is still a link to YouTube.
 */
export function rehypeYoutubeFacade() {
  return (tree: Root) => {
    visit(tree, 'raw', (node: { value: string }) => {
      if (!node.value.includes('youtube.com/embed/')) return

      node.value = node.value.replace(
        YOUTUBE_IFRAME,
        (_match, id: string, query: string) => {
          const src = `https://www.youtube.com/embed/${id}${query}`
          const separator = query ? '&' : '?'
          return `<div class="yt-facade" data-yt-src="${src}${separator}autoplay=1">
  <a href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener noreferrer">
    <img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="Assistir no YouTube" width="480" height="360" loading="lazy" decoding="async" />
    <span class="yt-facade-play" aria-hidden="true"></span>
    <span class="sr-only">Assistir no YouTube</span>
  </a>
</div>`
        },
      )
    })
  }
}
