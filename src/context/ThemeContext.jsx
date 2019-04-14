import React from 'react'

const localStorage = window.localStorage

const defaultState = {
  dark: false,
  toggleDark: () => {}
}

const ThemeContext = React.createContext(defaultState)

// Getting dark mode information from OS!
// You need macOS Mojave + Safari Technology Preview Release 68 to test this currently.
const supportsDarkMode = () => window.matchMedia('(prefers-color-scheme: dark)').matches === true

class ThemeProvider extends React.Component {
  constructor (props) {
    super(props)

    this.state = { dark: false }
  }

  toggleDark () {
    const dark = !this.state.dark
    localStorage.setItem('dark', dark)
    this.setState({ dark })
  }

  componentDidMount () {
    const wantsItDark = JSON.parse(localStorage.getItem('dark'))

    if (wantsItDark) {
      this.setState({ dark: wantsItDark })
    } else if (supportsDarkMode()) {
      this.setState({ dark: true })
    }
  }

  render () {
    const { children } = this.props
    const { dark } = this.state
    return (
      <ThemeContext.Provider
        value={{
          dark,
          toggleDark: this.toggleDark
        }}
      >
        {children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContext

export { ThemeProvider }
