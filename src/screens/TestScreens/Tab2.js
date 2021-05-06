import React from 'react'
import { StyleSheet, SafeAreaView, Text, Pressable } from 'react-native'

import Routes from '../../pages'

const Tab2 = ({ navigation, route }) => {
  const handleNavigation = () => {
    navigation.navigate(Routes.Tab1)
  }

  const handleNavigationToStack = () => {
    navigation.dangerouslyGetParent()?.goBack()
  }

  return (
    <SafeAreaView style={cs.page}>
      <Text style={[cs.titleBlock, cs.titleText]}>Tab 2</Text>
      <Pressable style={cs.buttonBlock} onPress={handleNavigation}>
        <Text style={cs.buttonText}>Go to Tab1</Text>
      </Pressable>
      <Pressable style={cs.buttonBlock} onPress={handleNavigationToStack}>
        <Text style={cs.buttonText}>Go back to Stack</Text>
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

export default Tab2
