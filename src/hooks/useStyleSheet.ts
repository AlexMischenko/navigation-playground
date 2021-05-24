import useTheme from './useTheme'

export const useStyleSheet = (getThemedStyleSheet: any) => {
  const theme = useTheme()
  return getThemedStyleSheet(theme)
}

export default useStyleSheet
