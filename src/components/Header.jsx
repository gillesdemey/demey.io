import React from 'react'
import { Link } from 'gatsby'
import { base } from './Header.style'

export default ({ title }) => (
  <h1 css={base}>
    <Link to={'/'}>
      {title}
    </Link>
  </h1>
)
