/**
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `AWS S3 Gatsby Site`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-apollo'
    },
    {
      resolve: 'gatsby-plugin-typescript'
    }
  ]
};
