import React from 'react'
import { View, Text, TouchableOpacity, Pressable } from 'react-native'

import Routes from '@routes'
import cs from './styles'

const Modal3 = ({ navigation }: any) => {
  const handleLoginNavigation = () => {
    navigation.navigate(Routes.MainStack, { screen: Routes.Login })
  }

  return (
    <View style={cs.wrapper}>
      <Pressable style={[cs.overlayBlock, cs.bgModal3]} onPress={() => navigation.goBack()} />
      <Text style={cs.modalTitleText}>Modal 3</Text>
      <TouchableOpacity
        style={cs.modalButtonBlock}
        onPress={() => navigation.navigate(Routes.Modal1)}
      >
        <Text>Go to Modal1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={cs.modalButtonBlock} onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity>
      <TouchableOpacity style={cs.modalButtonBlock} onPress={handleLoginNavigation}>
        <Text>Go to Login workflow</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Modal3
