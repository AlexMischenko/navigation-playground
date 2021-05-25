import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

import { useSelector, useTheme } from '@hooks'

const LoadingSpinner: React.FC<Record<string, never>> = () => {
  const isLoading = useSelector((state) => state.ui.isLoading)
  const theme = useTheme()

  if (!isLoading) {
    return null
  }

  return (
    <View style={cs.overlay}>
      <ActivityIndicator color={theme.colors.theme2} size="large" />
    </View>
  )
}

const cs = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 999,
    opacity: 0.7,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default LoadingSpinner
