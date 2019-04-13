import { css } from '@emotion/core'
import { lighten } from 'polished'

const colors = {
  yellow: '#f1c40f',
  lightYellow: '#ffeaa7',
  lightBlue: 'rgba(206, 246, 255, 1)',
  codeLinearGradient: `linear-gradient(to right, ${lighten(0.2, '#ff5f6d')}, ${lighten(0.2, '#ffc371')})`,
  linearGradient: 'linear-gradient(to right, #ff5f6d, #ffc371)'
}

const link = css`
  color: inherit;
  text-decoration: underline;
  text-decoration-color: ${colors.yellow};

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

export {
  colors,
  link,
  textClip
}
