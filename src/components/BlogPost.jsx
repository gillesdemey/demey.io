import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'

import Layout from './Layout'
import Head from './Head'
import { base, title as titleStyle, date as dateStyle, florette, nextPrevious, prevOrNext, next as nextStyle, previous as previousStyle, darkTheme } from './BlogPost.styles.jsx'
import { colors, textClip } from '../shared.styles.jsx'
import ThemeContext from '../context/ThemeContext.jsx'

class BlogPostTemplate extends React.Component {
  render () {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    const { title, author, date, teaser, cover } = post.frontmatter

    const metaTags = [
      { name: 'description', content: siteDescription },
      { property: 'og:type', content: 'article' },
      { property: 'article:published_time', content: date },
      { property: 'article:author', content: author },
      { property: 'og:title', content: title },
      { property: 'og:description', content: teaser }
    ]

    if (cover) metaTags.push({ property: 'og:image', content: cover.childImageSharp.fixed.src })

    return (
      <ThemeContext.Consumer>
        {theme => (
          <Layout location={this.props.location} title={siteTitle}>
            <Helmet
              htmlAttributes={{ lang: 'en' }}
              meta={metaTags}
              title={`${title} | ${siteTitle}`}
            />
            <Head />
            <div css={[base, theme.dark && darkTheme]}>
              <h1 css={titleStyle}>{title}</h1>
              <div css={dateStyle}>
                Written by <span css={textClip(colors.linearGradient)}>{author}</span> on {date}
              </div>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
              <div css={florette}><hr /></div>
            </div>

            <div css={nextPrevious}>
              <div css={[prevOrNext, previousStyle]}>
                {previous &&
                  <Link to={previous.fields.slug} rel='prev'>
                  ← {previous.frontmatter.title}
                  </Link>}
              </div>
              <div css={[prevOrNext, nextStyle]}>
                {next &&
                  <Link to={next.fields.slug} rel='next'>
                    {next.frontmatter.title} →
                  </Link>}
              </div>
            </div>
          </Layout>
        )}
      </ThemeContext.Consumer>
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
        teaser
        cover {
          childImageSharp {
            fixed(width: 500, quality: 100) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    }
  }
`
