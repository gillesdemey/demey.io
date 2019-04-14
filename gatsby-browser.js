import { ThemeProvider } from './src/context/ThemeContext'
require('./src/utils/prism.css')

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    {element}
  </ThemeProvider>
)
