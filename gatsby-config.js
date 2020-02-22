module.exports = {
  siteMetadata: {
    title: 'Gilles & Michiel De Mey',
    author: 'Gilles & Michiel De Mey',
    description: 'The personal blog of the digital twins',
    siteUrl: 'https://demey.io/'
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 650,
              withWebp: true,
              quality: 80
            }
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              noInlineHighlight: true
            }
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-numbered-footnotes'
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-feed',
    'gatsby-plugin-emotion',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet'
  ]
}
