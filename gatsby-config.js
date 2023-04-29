/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'Malte Nilsson || .NET Developer',
    description: "Malte Nilsson's CV",
    siteUrl: 'https://www.malte-nilsson.se'
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
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/space-img2.png'
      }
    }
  ]
}
