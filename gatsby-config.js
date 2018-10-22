module.exports = {
  siteMetadata: {
    name: `ullrich.is ✌️`
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    }
  ]
};
