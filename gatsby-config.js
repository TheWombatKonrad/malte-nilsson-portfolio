/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'Malte Nilsson || .NET Developer',
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `icons`,
        path: `${__dirname}/src/images/icons`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `education`,
        path: `${__dirname}/src/components/education`
      }
    }
  ]
}
