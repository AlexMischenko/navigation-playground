import React from 'react'
import { View, Text, TouchableOpacity, Pressable } from 'react-native'

import Routes from '@routes'
import cs from './styles'

const Modal2 = ({ navigation }: any) => {
  return (
    <View style={cs.wrapper}>
      <Pressable style={[cs.overlayBlock, cs.bgModal2]} onPress={() => navigation.goBack()} />
      <Text style={cs.modalTitleText}>Modal 2</Text>
      <TouchableOpacity
        style={cs.modalButtonBlock}
        onPress={() => navigation.navigate(Routes.Modal1)}
      >
        <Text>Go to Modal 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={cs.modalButtonBlock}
        onPress={() => navigation.navigate(Routes.Modal3)}
      >
        <Text>Go to Modal 3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={cs.modalButtonBlock} onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Modal2
