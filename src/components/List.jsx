import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from './Layout'
import Head from './Head'
import { postItem, date as dateStyle, wrapper, title as postTitle } from './List.styles'
import { colors, textClip } from '../shared.styles.jsx'

class BlogIndex extends React.Component {
  render () {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Head />
        <div css={wrapper}>
          {posts.map(({ node }) => {
            const { title, teaser, date, author } = node.frontmatter
            return (
              <div css={postItem} key={node.fields.slug}>
                <h3 css={postTitle}>
                  <Link to={node.fields.slug}>
                    {title || node.fields.slug}
                  </Link>
                </h3>
                <small css={dateStyle}>
                  Written by <span css={textClip(colors.linearGradient)}>{author}</span> on {date}
                </small>
                <p dangerouslySetInnerHTML={{ __html: teaser || node.exerpt }} />
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default BlogIndex
