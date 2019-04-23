module.exports = {
  siteMetadata: {
    title: 'Gatsby Bootcamp',
    description: 'A Gatsby tutorial by Andrew Mead',
    author: 'Joe Astuccio',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-remark',
  ],
}
