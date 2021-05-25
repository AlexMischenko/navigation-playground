import React from 'react'

import type { ITheme } from '@types'
import { useSelector } from '@hooks'
import { theme, darkTheme } from '@theme'

const ThemeContext = React.createContext<ITheme>(theme)

export const withThemeContext = (Component: React.ComponentType<any>) => (props: any) => {
  const darkMode = useSelector(({ ui: { darkMode } }) => darkMode)

  return (
    <ThemeContext.Provider value={darkMode ? darkTheme : theme}>
      <Component {...props} />
    </ThemeContext.Provider>
  )
}

export default ThemeContext
