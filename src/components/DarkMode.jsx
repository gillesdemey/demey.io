import ThemeContext from '../context/ThemeContext'
import { base, dark, light } from './DarkMode.styles.jsx'

export default () => (
  <ThemeContext.Consumer>
    {theme => {
      const styles = [base, theme.dark ? dark : light]

      return (
        <button css={styles} onClick={theme.toggleDark}>
          {theme.dark ? <span>Light mode ☀</span> : <span>Dark mode ☾</span>}
        </button>
      )
    }}
  </ThemeContext.Consumer>
)
