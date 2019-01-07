import { css } from '@emotion/core'

const base = css`
  font-size: 1em;
  font-family: 'Merriweather';
  color: rgba(0, 0, 0, 0.9);

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat';
  }

  h1 {
    line-height: 1em;
  }

  a {
    background: rgba(232, 67, 147, 0.2);
    border-bottom: solid 1px black;
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    background: rgba(232, 67, 147, 0.35);
  }

  p {
    margin: 1.5em 0;
    line-height: 1.5em;
  }

  ul {
    margin: 0;
    line-height: 1.5em;
  }

  code {
    font-family: 'Source Code Pro', monospace;
    font-weight: bold;
    background: rgba(206, 246, 255);
  }

  pre > code {
    font-weight: normal;
    background: none;
    font-size: 16px;
  }

  blockquote {
    margin-left: 0;
    padding-left: 1em;
    border-left: solid 5px rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.75);
    font-style: italic;
  }

  img {
    max-width: 100%;
  }

  hr {
    border: none;
    border-top: solid 5px rgba(0,0,0,0.1);
  }

  .footnotes {
    font-size: 0.85em;
    p { display: inline-block; margin: 0.2em 0; }
  }
`

const title = css`
  font-size: 3.5em;
  font-family: 'Montserrat';
  margin-bottom: 0;
`

const date = css`
  margin: 0.5em 0;
  font-size: 0.85em;
`

const florette = css`
  font-size: 8em;
  margin-top: 6rem;
  line-height: 0.1em;
  text-align: center;

  color: rgba(0, 0, 0, 0.1);
`

const nextPrevious = css`
  display: flex;
  align-items: center;
  width: 100%;

  a {
    background: rgba(232, 67, 147, 0.2);
    border-bottom: solid 1px black;
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    background: rgba(232, 67, 147, 0.35);
  }
`

const prevOrNext = css`
  flex: 1;
  font-family: 'Montserrat';
  font-weight: 900;

  display: flex;
  flex-direction: column;
`

const previous = css`
  > a { align-self: flex-start; }
`

const next = css`
  > a { align-self: flex-end; }
`

export {
  base,
  title,
  date,
  florette,
  nextPrevious,
  prevOrNext,
  previous,
  next
}
