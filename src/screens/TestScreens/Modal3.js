import React from 'react'
import { View, Text, TouchableOpacity, Pressable, StyleSheet } from 'react-native'

import Routes from '../../routes'

const Modal3 = ({ navigation }) => {
  const handleLoginNavigation = () => {
    navigation.navigate(Routes.MainStack, { screen: Routes.Signup })
  }

  return (
    <View style={cs.wrapper}>
      <Pressable style={cs.overlayBlock} onPress={() => navigation.goBack()} />
      <Text style={cs.titleText}>Modal 3</Text>
      <TouchableOpacity style={cs.buttonBlock} onPress={() => navigation.navigate(Routes.Modal1)}>
        <Text>Go to Modal1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={cs.buttonBlock} onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity>
      <TouchableOpacity style={cs.buttonBlock} onPress={handleLoginNavigation}>
        <Text>Go to Login workflow</Text>
      </TouchableOpacity>
    </View>
  )
}

const cs = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayBlock: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    backgroundColor: '#4518DB',
    opacity: 0.2,
  },
  titleText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonBlock: {
    backgroundColor: 'white',
    padding: 20,
  },
})

export default Modal3
