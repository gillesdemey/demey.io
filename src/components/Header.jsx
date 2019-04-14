import React from 'react'
import { Link } from 'gatsby'
import { base, dark } from './Header.style.jsx'
import DarkMode from './DarkMode.jsx'
import ThemeContext from '../context/ThemeContext.jsx'

export default ({ title }) => (
  <ThemeContext.Consumer>
    {theme => (
      <div>
        <h1 css={[base, theme.dark && dark]}>
          <Link to={'/'}>
            {title}
          </Link>
        </h1>
        <DarkMode />
      </div>
    )}
  </ThemeContext.Consumer>
)
