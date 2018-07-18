module.exports = {
  siteMetadata: {
    title: 'bandQL',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
      {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        pathToTheme: 'src/themes/default',
      }
    }
  ]
} 
