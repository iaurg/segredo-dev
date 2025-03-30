export type Site = {
  title: string
  description: string
  href: string
  locale: string
  featuredPostCount: number
  postsPerPage: number
  author: string
  image: string
  keywords?: string
  region?: string
  position?: string
  ICBM?: string
}

export type SocialLink = {
  href: string
  label: string
}

export type IconMap = {
  [key: string]: string
}
