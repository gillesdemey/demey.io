import { css } from '@emotion/core'

const base = css`
  h1, h2, h3, h4, h5, h6 {
    color: black;
    font-family: 'Montserrat';
  }

  ul, li, quote, i {
    font-size: 1rem;
    font-family: 'Merriweather';
  }

  a {
    color: #e84393;
  }
`

const title = css`
  font-size: 3.5em;
  font-family: 'Montserrat';
`

export {
  base,
  title
}
