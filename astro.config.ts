import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'

import expressiveCode from 'astro-expressive-code'
import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeKatex from 'rehype-katex'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkEmoji from 'remark-emoji'
import remarkMath from 'remark-math'
import remarkSectionize from 'remark-sectionize'
import remarkToc from 'remark-toc'

import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'

import tailwindcss from '@tailwindcss/vite'
import partytown from '@astrojs/partytown'

const blogSlugs = [
  'prompt-para-desenvolvedores',
  'o-que-sao-migrations',
  '42-sp-basecamp',
  'o-que-e-xss',
  '42-get-next-line',
  'saas',
  'qual-sera-o-proximo-salto',
  'programador-apaixonado',
  'problemas-np',
  'para-que-serve-o-create-react-app',
  'o-que-e-um-componente-reutilizavel',
  'o-que-e-single-page-application',
  'o-que-e-shell',
  'o-que-e-o-gatsbyjs',
  'o-que-e-next-js',
  'o-que-e-kernel',
  'o-que-e-imutabilidade',
  'o-mitico-homem-mes',
  'nextjs-analise-de-bundle',
  'next-js-styled-components',
  'maestria',
  'introducao-web-hacking',
  'introducao-inteligencia-artificial',
  'html',
  'hormozi-como-fazer-dinheiro',
  'habilidades-programador',
  'extreme-programming',
  'erro-test-jest-antd',
  'conselho-de-steve-wozniak',
  'configurar-testes-no-nextjs',
  'como-saber-o-que-testar',
  'como-participar-do-hacktoberfest',
  'como-otimizar-imagem-para-site',
  'como-criar-descricao-github',
  'como-burlar-o-medium',
  'como-a-internet-funciona',
  'aprenda-em-publico',
  '42-libft',
]

const blogRedirects = Object.fromEntries(
  blogSlugs.map((slug) => [
    `/${slug}/`,
    {
      status: 301 as const,
      destination: `/blog/${slug}/`,
    },
  ]),
)

export default defineConfig({
  site: 'https://segredo.dev',
  trailingSlash: 'always',
  redirects: blogRedirects,
  integrations: [
    expressiveCode({
      themes: ['github-light', 'github-dark'],
      plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
      useDarkModeMediaQuery: false,
      themeCssSelector: (theme) => `.${theme.name.split('-')[1]}`,
      defaultProps: {
        wrap: true,
        collapseStyle: 'collapsible-auto',
        overridesByLang: {
          'ansi,bat,bash,batch,cmd,console,powershell,ps,ps1,psd1,psm1,sh,shell,shellscript,shellsession,text,zsh':
            {
              showLineNumbers: false,
            },
        },
      },
      styleOverrides: {
        borderColor: 'var(--border)',
        codeFontFamily: 'var(--font-mono)',
        codeBackground:
          'color-mix(in oklab, var(--secondary) 25%, transparent)',
        frames: {
          editorActiveTabForeground: 'var(--muted-foreground)',
          editorActiveTabBackground:
            'color-mix(in oklab, var(--secondary) 25%, transparent)',
          editorActiveTabIndicatorBottomColor: 'transparent',
          editorActiveTabIndicatorTopColor: 'transparent',
          editorTabBarBackground: 'transparent',
          editorTabBarBorderBottomColor: 'transparent',
          frameBoxShadowCssValue: 'none',
          terminalBackground:
            'color-mix(in oklab, var(--secondary) 25%, transparent)',
          terminalTitlebarBackground: 'transparent',
          terminalTitlebarBorderBottomColor: 'transparent',
          terminalTitlebarForeground: 'var(--muted-foreground)',
        },
        lineNumbers: {
          foreground: 'var(--muted-foreground)',
        },
        uiFontFamily: 'var(--font-sans)',
      },
    }),
    mdx(),
    react(),
    sitemap(),
    icon(),
    partytown({
      config: {
        forward: ['dataLayer.push', 'gtag'],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    port: 1234,
    host: true,
  },
  devToolbar: {
    enabled: false,
  },
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['nofollow', 'noreferrer', 'noopener'],
        },
      ],
      rehypeHeadingIds,
      rehypeKatex,
      [
        rehypePrettyCode,
        {
          theme: {
            light: 'github-light',
            dark: 'github-dark',
          },
        },
      ],
    ],
    remarkPlugins: [remarkToc, remarkMath, remarkEmoji, remarkSectionize],
  },
})
