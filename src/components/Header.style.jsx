import { css } from '@emotion/core'
import { sansSerif } from '../shared.styles.jsx'

const base = css`
  font-size: 1.5em;
  font-family: ${sansSerif};
  font-weight: 900;

  color: black;

  > a {
    color: inherit;
    padding-bottom: .15rem;
    text-decoration: none;
  }
`

const dark = css`
  color: white;
`

export {
  base,
  dark
}
