import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'segredo.dev',
  locale: 'pt-BR',
  description:
    'Aqui reuno meus conhecimentos, projetos e estudos sobre desenvolvimento web e tecnologias.',
  href: 'https://segredo.dev/',
  featuredPostCount: 2,
  postsPerPage: 12,
  author: 'iaurg',
  image: '/static/og-image-default.jpg',
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog/',
    label: 'blog',
  },
  {
    href: '/autores/',
    label: 'autores',
  },
  {
    href: '/sobre/',
    label: 'sobre',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/iaurg',
    label: 'GitHub',
  },
  {
    href: 'https://twitter.com/iaurg',
    label: 'Twitter',
  },
  {
    href: 'https://linkedin.com/in/iaurg',
    label: 'LinkedIn',
  },
  {
    href: 'mailto:italoaurelior@gmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
