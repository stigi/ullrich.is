module.exports = {
  siteMetadata: {
    name: `ullrich.is ✌️`
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: `${__dirname}/src/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-10108913-2",
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    }
  ]
};
