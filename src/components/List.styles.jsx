import { css } from '@emotion/core'
import { colors, serif, textClip } from '../shared.styles.jsx'

const postItem = css`
  margin-bottom: 3rem;
`

const date = css`
  font-family: ${serif};
  font-size: 0.75em;
`

const wrapper = css`
  margin-top: 4rem;
`

const title = css`
  line-height: 1.2em;

  font-size: 1.5em;
  font-weight: 900;
  margin-bottom: 0em;

  font-family: ${serif};

  a {
    ${textClip(colors.linearGradient)};
    text-decoration-color: transparent;
  }
`

export {
  wrapper,
  postItem,
  date,
  title
}
