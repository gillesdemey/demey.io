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

  h3 {
    font-family: 'Merriweather';
    font-weight: 900;
    background: rgba(232, 67, 147, 0.25);
    line-height: 1.2em;

    > a { text-decoration: none; color: inherit; }
  }
`

export {
  base, wrapper
}
