import { useContext } from 'react'

import type { ITheme } from '@types'
import ThemeContext from '@components/HOC/ThemeContext'

export const useTheme = (): ITheme => {
  const theme = useContext(ThemeContext)
  return theme
}

export default useTheme
