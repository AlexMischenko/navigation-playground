import { StyleSheet } from 'react-native'

import type { ISafeAreaEdges, ITheme } from '@types'
import { adjustToWidth } from '@utils/styleHelpers'
import colors from './colors'
import textStyles from './typography'
import helpers, { isIos, isAndroid, sizes } from './helpers'

export const SafeAreaPaddingTop = adjustToWidth(44)

const borderRadius = {
  sm: adjustToWidth(5),
  md: adjustToWidth(8),
  lg: adjustToWidth(14),
}

const coloredDot = (size: number, color = colors.white) => ({
  width: adjustToWidth(size),
  height: adjustToWidth(size),
  borderRadius: adjustToWidth(size / 2),
  backgroundColor: color,
})

const ui = StyleSheet.create({
  colorDot: coloredDot(24),
  bullet: coloredDot(7, colors.white45),
  bulletActive: coloredDot(7, colors.white),
})

const buttons = StyleSheet.create({
  headerActionWrapper: {
    height: adjustToWidth(44),
    minWidth: adjustToWidth(44),
    ...helpers.flexCenter,
  },
  sideActionWrapper: {
    height: adjustToWidth(44),
    paddingHorizontal: adjustToWidth(8),
    ...helpers.flexCenter,
  },
  headerActionText: {
    ...textStyles.body,
    color: colors.theme2,
  },
})

const safeAreaEdges: ISafeAreaEdges = {
  top: ['top'],
  bottom: ['bottom'],
  both: ['top', 'bottom'],
}

const mediaViewer = {
  backgroundImage: {
    flex: 1,
    backgroundColor: 'black',
  },
}

export const theme: ITheme = {
  isIos,
  isAndroid,
  sizes,
  colors,
  helpers,
  textStyles,
  borderRadius,

  ui,
  buttons,
  safeAreaEdges,
  mediaViewer,
}

export const darkTheme: ITheme = {
  ...theme,
  colors: { ...theme.colors },
}
