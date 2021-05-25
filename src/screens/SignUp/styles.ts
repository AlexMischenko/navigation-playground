import { StyleSheet } from 'react-native'

import type { ITheme } from '@types'
import { adjustToWidth } from '@utils/styleHelpers'

export default (theme: ITheme): any =>
  StyleSheet.create({
    titleBlock: {
      alignSelf: 'center',
      marginBottom: adjustToWidth(20),
    },
    submitButton: {
      justifyContent: 'center',
      alignItems: 'center',
      height: adjustToWidth(60),
      marginTop: adjustToWidth(30),
      borderRadius: theme.borderRadius.lg,
      backgroundColor: theme.colors.success,
    },
    whiteColor: {
      color: theme.colors.white,
    },
    pressableTextColor: {
      color: theme.colors.theme2,
    },
  })
