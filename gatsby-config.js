module.exports = {
  siteMetadata: {
    title: `GraphQL Blog`,
    description: `a gatsby blog with appsync and amplify backend`,
    author: `sigitp@`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
      	refetchInterval: 30,
        typeName: `gatsbyappsync`,
        fieldName: `gatsbyappsync`,
        url: `https://randomvalue.appsync-api.us-east-1.amazonaws.com/graphql`,
        headers: {
          'x-api-key': 'ran2-domkeysabcdefghijk'
        }
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        //icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
