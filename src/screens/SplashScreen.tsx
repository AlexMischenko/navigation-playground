import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const SplashScreen: React.FC<Record<string, never>> = () => {
  return (
    <View style={cs.wrapper}>
      <Text style={cs.titleText}> SplashScreen </Text>
    </View>
  )
}

const cs = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  titleText: {
    fontSize: 35,
    fontWeight: 'bold',
  },
})

export default SplashScreen
