import React from 'react'
import { View, Text, TouchableOpacity, Pressable, StyleSheet } from 'react-native'

import Routes from '../../routes'

const Modal1 = ({ navigation }) => {
  return (
    <View style={cs.wrapper}>
      <Pressable style={cs.overlayBlock} onPress={() => navigation.goBack()} />
      <Text style={cs.titleText}>Modal 1</Text>
      <TouchableOpacity style={cs.buttonBlock} onPress={() => navigation.navigate(Routes.Modal2)}>
        <Text>Go to Modal2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={cs.buttonBlock} onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
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
    backgroundColor: '#0f2',
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

export default Modal1
