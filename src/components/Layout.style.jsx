import { css } from '@emotion/core'
import { serif } from '../shared.styles.jsx'

const base = css`
  max-width: 42rem;
  margin: 0 auto;
`

const wrapper = css`
  p {
    font-family: ${serif};
    font-size: 1em;
  }
`

const globalStyle = css`
  body, html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
  }
`

const globalDark = css`
  body {
    background: black;
    color: #fff;
  }
`

export {
  base, wrapper, globalStyle, globalDark
}
