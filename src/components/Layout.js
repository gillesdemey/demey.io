import React, { Fragment } from 'react'
import { Global, css } from '@emotion/core'
import Header from './Header'
import { base, wrapper } from './Layout.style'

class Layout extends React.Component {
  render () {
    const { title, children } = this.props

    return (
      <Fragment>
        <Global styles={css`
          body { font-size: 18px; }
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
