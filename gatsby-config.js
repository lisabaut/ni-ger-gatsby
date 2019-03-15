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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
