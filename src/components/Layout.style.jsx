import { css } from '@emotion/core'

const base = css`
  max-width: 42rem;
  margin: 0 auto;
`

const wrapper = css`
  p {
    font-family: 'Merriweather';
    font-size: 1em;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Merriweather';
    font-weight: 900;

    > a { text-decoration: none; color: inherit; }
  }
`

export {
  base, wrapper
}
