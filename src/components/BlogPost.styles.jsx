import { css } from '@emotion/core'
import { link, textClip, colors, gradientBackground } from '../shared.styles.jsx'

const base = css`
  font-size: 1em;
  line-height: 1.6em;
  font-family: 'Merriweather';
  overflow-wrap: break-word;

  color: rgba(0, 0, 0, 0.9);

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat';
    ${textClip(colors.linearGradient)};
  }

  h1 {
    line-height: 1.1em;
  }

  a.gatsby-resp-image-link {
    background: none;
    border-bottom: none;
  }

  a.gatsby-resp-image-link:hover {
    background: none;
  }

  a {
    ${link};

    background: #ffeaa7

    &:hover {
      background: shade(0.2, '#ffeaa7');
    }
  }

  p {
    margin: 1.5em 0;
    line-height: 1.5em;
  }

  ul {
    margin: 0;
    line-height: 1.5em;
  }

  /* inline code and code block styles */
  code {
    ${gradientBackground(colors.lightLinearGradient)};
    font-family: 'Source Code Pro', monospace;
  }

  /* code block styles */
  pre > code {
    font-weight: normal;
    background: none;
    font-size: 15px;
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

  .footnote-ref {
    display: inline;

    padding: 0.15em;
    font-size: 0.85em;
  }
`

const title = css`
  font-size: 3.2em;
  font-family: 'Montserrat';
  margin-bottom: 0;
`

const date = css`
  margin: 0.5em 0;
  font-size: 0.85em;

  font-family: 'Montserrat';
  font-weight: 900;
`

const florette = css`
  margin: 3rem 0;

  color: rgba(0, 0, 0, 0.1);
`

const nextPrevious = css`
  display: flex;
  align-items: center;
  width: 100%;

  a {
    ${link};
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
