let activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development'

// load config from env file
require('dotenv').config({
  path: `.env.${ activeEnv }`,
})

const config = require('./src/config')

module.exports = {
  pathPrefix: process.env.PATH_PREFIX,
  siteMetadata: {
    title: config.siteMetadata.title,
    description: config.siteMetadata.description,
    author: config.siteMetadata.author,
    lang: config.siteMetadata.lang,
    keywords: config.siteMetadata.keywords,
    heroTexts: config.siteMetadata.heroTexts
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${ __dirname }/src/content`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteMetadata.title,
        short_name: config.siteMetadata.title,
        start_url: `/`,
        background_color: `#ffb8a7`,
        theme_color: `#ffb8a7`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
        icons: [
          {
            src: `/favicons/icon-48x48.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
          {
            src: `/favicons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Playfair Display`
        ]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
