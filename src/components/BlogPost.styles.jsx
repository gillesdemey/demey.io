import { css } from '@emotion/core'

const base = css`
  font-size: 1rem;
  font-family: 'Merriweather';
  color: rgba(0, 0, 0, 0.9);

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat';
  }

  a {
    color: #e84393;
  }

  p {
    margin: 1.5em 0;
    line-height: 1.5em;
  }

  ul {
    margin: 0;
  }

  blockquote {
    margin-left: 0;
    padding-left: 1em;
    border-left: solid 5px rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.75);
    font-style: italic;
  }
`

const title = css`
  font-size: 3.5em;
  font-family: 'Montserrat';
  margin-bottom: 0;
`

const date = css``

const florette = css`
  font-size: 8em;
  margin-top: 6rem;
  line-height: 0.1em;
  text-align: center;

  color: rgba(0, 0, 0, 0.1);
`

export {
  base,
  title,
  date,
  florette
}
