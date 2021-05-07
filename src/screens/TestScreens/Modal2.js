import React from 'react'
import { View, Text, TouchableOpacity, Pressable, StyleSheet } from 'react-native'

import Routes from '../../pages'

const Modal2 = ({ navigation }) => {
  return (
    <View style={cs.wrapper}>
      <Pressable style={cs.overlayBlock} onPress={() => navigation.goBack()} />
      <Text style={cs.titleText}>Modal 2</Text>
      <TouchableOpacity style={cs.buttonBlock} onPress={() => navigation.navigate(Routes.Modal1)}>
        <Text>Go to Modal 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={cs.buttonBlock} onPress={() => navigation.navigate(Routes.Modal3)}>
        <Text>Go to Modal 3</Text>
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
    backgroundColor: '#f00',
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

export default Modal2
