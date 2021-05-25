import React from 'react'
import { View, Text, TouchableOpacity, Pressable } from 'react-native'

import Routes from '@routes'
import cs from './styles'

const Modal1 = ({ navigation }: any) => {
  return (
    <View style={cs.wrapper}>
      <Pressable style={[cs.overlayBlock, cs.bgModal1]} onPress={() => navigation.goBack()} />
      <Text style={cs.modalTitleText}>Modal 1</Text>
      <TouchableOpacity
        style={cs.modalButtonBlock}
        onPress={() => navigation.navigate(Routes.Modal2)}
      >
        <Text>Go to Modal2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={cs.modalButtonBlock} onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Modal1
