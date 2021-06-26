module.exports = {
  pathPrefix: "/iaurg",
  siteMetadata: {
    title: `Segredo Dev`,
    author: {
      name: `@iaurg`,
      summary: `web dev`,
    },
    description: `As descobertas que faço e coisas que aprendo`,
    siteUrl: `https://segredo.dev`,
    social: {
      twitter: `iaurg`,
    },
    defaultImage: "images/bg.jpeg",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-138531025-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `iaurg`,
        short_name: `iaurg`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `content/assets/iaurg-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    "gatsby-plugin-dark-mode",
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        query: `
        {
          allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 1000) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  slug
                }
                id
              }
            }
          }
        }
        `,
      mapping: {
        allMarkdownRemark: {
            sitemap: `posts`,
        },  
      },
      addUncaughtPages: true, // optional: will fill up pages that are not caught by queries and mapping and list them under `sitemap-pages.xml`         
    }
  }
  ],
}
