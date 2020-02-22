import { css } from '@emotion/core'
import { tint } from 'polished'

const gradient1 = '#ee0979'
const gradient2 = '#ff6a00'

const colors = {
  yellow: '#f1c40f',
  lightYellow: '#ffeaa7',
  lightBlue: 'rgba(206, 246, 255, 1)',
  lightLinearGradient: `linear-gradient(to right, ${tint(0.85, gradient1)}, ${tint(0.85, gradient2)})`,
  linearGradient: `linear-gradient(to right, ${gradient1}, ${gradient2})`,
  gradient1,
  gradient2
}

const sansSerif = 'Montserrat, sans-serif'
const serif = 'Domine, serif'

const link = css`
  color: inherit;
  text-decoration: none;
  border-bottom: solid 2px ${colors.yellow};

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
  textClip,
  serif,
  sansSerif
}
