module.exports = {
  siteMetadata: {
    title: 'The Digital Twins',
    author: 'Gilles & Michiel De Mey',
    description: 'The personal blog of the digital twins',
    siteUrl: 'https://gatsby-starter-blog-demo.netlify.com/'
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants'
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: `ADD YOUR TRACKING ID HERE`,
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          { family: `Merriweather`, variants: [`400`, `900`] },
          { family: `Montserrat`, variants: [`400`, `900`] }
        ]
      }
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ]
}
