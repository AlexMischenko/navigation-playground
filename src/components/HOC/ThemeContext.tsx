import React from 'react'

import { useSelector } from '../../hooks'
import { theme, darkTheme } from '../../theme'

interface IThemeContext {
  [key: string]: any;
}

const ThemeContext = React.createContext<IThemeContext>({})

export const withThemeContext = (Component: any) => (props: any) => {
  const darkMode = useSelector(({ ui: { darkMode } }) => darkMode)

  return (
    <ThemeContext.Provider value={darkMode ? darkTheme : theme}>
      <Component {...props} />
    </ThemeContext.Provider>
  )
}

export default ThemeContext
