import React from 'react'
import { StyleSheet, SafeAreaView, Text, Pressable } from 'react-native'

import Routes from '../../pages'

const Page1 = ({ navigation, route }) => {
  const handleNavigation = () => {
    navigation.navigate(Routes.Page2)
  }

  const handleChangeTitle = () => {
    navigation.setOptions({ title: 'Remaned Title from inside Page1' })
  }

  return (
    <SafeAreaView style={cs.page}>
      <Text style={[cs.titleBlock, cs.titleText]}>Page 1</Text>
      <Pressable style={cs.buttonBlock} onPress={handleChangeTitle}>
        <Text style={cs.buttonText}>Update title</Text>
      </Pressable>
      <Pressable style={cs.buttonBlock} onPress={handleNavigation}>
        <Text style={cs.buttonText}>Go to Page2</Text>
      </Pressable>
    </SafeAreaView>
  )
}

const cs = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  titleBlock: {
    marginBottom: 20,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonBlock: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#4A80F0',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
})

export default Page1
