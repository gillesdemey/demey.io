import { css } from '@emotion/core'
import { colors, textClip } from '../shared.styles.jsx'

const base = css`
  font-size: 1.5em;
  font-family: 'Montserrat';
  font-weight: 900;
  color: black;

  > a {
    color: inherit;
    padding-bottom: .15rem;
    text-decoration: none;
  }
`

export {
  base
}
