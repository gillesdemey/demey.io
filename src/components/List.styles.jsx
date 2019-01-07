import { css } from '@emotion/core'

const postItem = css`
  margin-bottom: 3rem;
`

const date = css`
  font-family: 'Montserrat';
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

  font-family: 'Montserrat';

  a {
    background: rgba(232, 67, 147, 0.2);
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    background: rgba(232, 67, 147, 0.35);
  }
`

export {
  wrapper,
  postItem,
  date,
  title
}
