import { css } from '@emotion/core'
import { lighten } from 'polished'

const colors = {
  yellow: '#f1c40f',
  lightYellow: '#ffeaa7',
  lightBlue: 'rgba(206, 246, 255, 1)',
  lightLinearGradient: `linear-gradient(to right, ${lighten(0.4, '#ee0979')}, ${lighten(0.4, '#ff6a00')})`,
  linearGradient: 'linear-gradient(to right, #ee0979, #ff6a00)'
}

const link = css`
  color: inherit;
  text-decoration: none;
  border-bottom: solid 2px ${colors.yellow};
  /* text-decoration: underline; */
  /* text-decoration-color: ${colors.yellow}; */

  &:hover {
    /* code link  */
    > code {
      background: inherit;
    }

    background: ${colors.lightYellow};
  }
`

const textClip = (gradient) => css`
  color: #fff;
  background: ${gradient};

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
`

const gradientBackground = (gradient) => css`
  background: ${gradient};
  border-radius: 0.25em;

  padding: 0.1em 0.25em;
  font-size: 0.9em;
`

export {
  colors,
  gradientBackground,
  link,
  textClip
}
