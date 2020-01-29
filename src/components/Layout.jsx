import React, { Fragment } from 'react'
import { Global } from '@emotion/core'
import Header from './Header'
import { base, wrapper, globalStyle, globalDark } from './Layout.style'

import ThemeContext from '../context/ThemeContext'

class Layout extends React.Component {
  render () {
    const { title, children } = this.props

    return (
      <ThemeContext.Consumer>
        {theme => (
          <Fragment>
            <Global styles={[globalStyle, theme.dark && globalDark]} />
            <div css={base} className={theme.dark ? 'dark-theme' : 'light-theme'}>
              <Header title={title} />
              <div css={wrapper}>
                {children}
              </div>
            </div>
          </Fragment>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default Layout
