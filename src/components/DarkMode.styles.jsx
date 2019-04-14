import { css } from '@emotion/core'

const base = css`
  font-size: 0.8em;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;

  padding: 0.5em 1em;
  border-radius: 0.25em;

  @media (min-width: 992px) {
    position: absolute;
    right: 15px;
    top: 10px;
  }
`

const dark = css`
  background-color: #2a2b2d;
  color: #fff;

  a, a:visited {
    color: #fff;
  }
`

const light = css`
  border: solid 1px black;
`

export {
  base,
  dark,
  light
}
