import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'

import Layout from './Layout'
import { base, title as titleStyle, date as dateStyle, florette, nextPrevious, prevOrNext, next as nextStyle, previous as previousStyle } from './BlogPost.styles'

class BlogPostTemplate extends React.Component {
  render () {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    const { title, author, date } = post.frontmatter

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${title} | ${siteTitle}`}
        />
        <div css={base}>
          <h1 css={titleStyle}>{title}</h1>
          <div css={dateStyle}>
            Written by {author} on {date}
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <div css={florette}>⏟</div>
        </div>

        <div css={nextPrevious}>
          <div css={[prevOrNext, previousStyle]}>
          {previous &&
            <Link to={previous.fields.slug} rel='prev'>
              ⬅️ {previous.frontmatter.title}
            </Link>
          }
          </div>
          <div css={[prevOrNext, nextStyle]}>
          {next &&
            <Link to={next.fields.slug} rel='next'>
              {next.frontmatter.title} ➡️
            </Link>
          }
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
