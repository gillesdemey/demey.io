import { css } from '@emotion/core'
import { link, textClip, colors, gradientBackground, serif, sansSerif } from '../shared.styles.jsx'
import { tint } from 'polished'

const base = css`
  font-size: 1em;
  line-height: 1.6em;
  font-family: ${sansSerif};
  overflow-wrap: break-word;

  h1, h2, h3, h4, h5, h6 {
    font-family: ${serif};
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
    color: white;
  }

  blockquote {
    margin-left: 0;
    padding-left: 1em;
    border-left: solid 5px ${colors.yellow};
    font-style: italic;
  }

  img {
    max-width: 100%;
  }

  hr {
    border: none;
    border-top: solid 1px rgba(0,0,0,0.1);
  }

  .footnotes {
    font-size: 0.85em;
    p { display: inline-block; margin: 0.2em 0; }

    hr {
      margin-bottom: 2rem;
    }
  }

  .footnote-ref {
    display: inline;

    padding: 0.15em;
    font-size: 0.85em;
  }
`

const title = css`
  font-size: 3.2em;
  font-family: ${serif};
  margin-bottom: 0;
`

const date = css`
  margin: 0.5em 0;
  font-size: 0.85em;

  font-family: ${serif};
  font-weight: 900;
`

const florette = css`
  margin: 2rem 0;

  color: rgba(0, 0, 0, 0.1);
`

const nextPrevious = css`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`

const prevOrNext = css`
  ${textClip(colors.linearGradient)};
  font-family: ${serif};
  flex: 1;
  display: flex;
  flex-direction: column;
`

const previous = css`
  > a { align-self: flex-start; }
`

const next = css`
  > a { align-self: flex-end; }
`

const darkTheme = css`
  code {
    ${gradientBackground(`linear-gradient(to right, ${tint(0.25, colors.gradient1)}, ${tint(0.25, colors.gradient2)})`)};
    color: black;
  }

  hr {
    border-color: ${colors.yellow};
  }

  a:hover {
    color: black;
    background: ${colors.yellow};
  }
`

export {
  base,
  darkTheme,
  title,
  date,
  florette,
  nextPrevious,
  prevOrNext,
  previous,
  next
}
