import { css } from '@emotion/core'
import { sansSerif } from '../shared.styles.jsx'

const base = css`
  max-width: 42rem;
  margin: 0 auto;
`

const wrapper = css`
  p {
    font-family: ${sansSerif};
    font-size: 1em;
  }
`

export {
  base, wrapper
}
