import { useContext } from 'react'

import ThemeContext from '../components/HOC/ThemeContext'

export const useTheme = () => {
  const theme = useContext(ThemeContext)
  return theme
}

export default useTheme
