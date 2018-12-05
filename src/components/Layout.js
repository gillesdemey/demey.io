import React, { Fragment } from 'react'
import { Global, css } from '@emotion/core'
import Header from './Header'
import { base, wrapper } from './Layout.style'

class Layout extends React.Component {
  render () {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <Fragment>
        <Global styles={css`

        `} />
        <div css={base}>
          <Header title={title} />
          <div css={wrapper}>
            {children}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Layout
