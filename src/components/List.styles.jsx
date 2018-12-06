import { css } from '@emotion/core'

const postItem = css`
  /* title */
  > h3 {
    font-size: 1.5em;
    font-weight: 900;
    margin-bottom: 0em;
    color: #e84393;
  }

  margin-bottom: 3rem;
`

const date = css`
  font-family: 'Montserrat';
  font-weight: 900;
  font-size: 0.85em;
`

const wrapper = css`
  margin-top: 4rem;
`

export {
  wrapper,
  postItem,
  date
}
