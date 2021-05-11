import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import theme from '../theme'
import { adjustToWidth, adjustFont } from '../utils/styleHelpers'

const NoInternetIndicator = () => {
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

const cs = StyleSheet.create({
  overlayContent: {
    backgroundColor: theme.colors.dark2,
    padding: adjustToWidth(40),
    borderRadius: theme.borderRadius.xxl,
  },
  overlayTitle: {
    ...theme.textStyles.h1,
    textAlign: 'center',
    lineHeight: adjustFont(46),
    color: theme.colors.white,
  },
})

export default NoInternetIndicator
