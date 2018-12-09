import React from 'react'
import List from '../components/List'
import { graphql } from 'gatsby'

export default (props) => <List {...props} />

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            teaser
          }
        }
      }
    }
  }
`
