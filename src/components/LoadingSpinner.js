import React from 'react'
import { useSelector } from 'react-redux'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

const LoadingSpinner = () => {
  const isLoading = useSelector((state) => state.ui.isLoading)
  if (!isLoading) {
    return null
  }

  return (
    <View style={cs.overlay}>
      <ActivityIndicator color="#007AFF" size="large" />
    </View>
  )
}

const cs = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFill,
    zIndex: 999,
    opacity: 0.7,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default LoadingSpinner
