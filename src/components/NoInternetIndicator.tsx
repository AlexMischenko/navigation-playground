import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import type { ITheme } from '@types'
import { useTheme, useStyleSheet } from '@hooks'
import { adjustToWidth, adjustFont } from '@utils/styleHelpers'

const NoInternetIndicator: React.FC<Record<string, never>> = () => {
  const theme = useTheme()
  const cs = useStyleSheet(styles)
  return (
    <View style={theme.helpers.overlay}>
      <View style={theme.helpers.flexColumnCenter}>
        <View style={cs.overlayContent}>
          <Text style={cs.overlayTitle}>There is no Internet connection</Text>
        </View>
      </View>
    </View>
  )
}

const styles = (theme: ITheme): any =>
  StyleSheet.create({
    overlayContent: {
      backgroundColor: theme.colors.disabledText,
      padding: adjustToWidth(40),
      borderRadius: theme.borderRadius.lg,
    },
    overlayTitle: {
      ...theme.textStyles.titleLarge,
      textAlign: 'center',
      lineHeight: adjustFont(46),
      color: theme.colors.white,
    },
  })

export default NoInternetIndicator
