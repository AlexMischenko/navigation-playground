import React from 'react'
import { StyleSheet, SafeAreaView, Text, Pressable } from 'react-native'

import Routes from '@routes'

const Tab1 = ({ navigation }: any) => {
  return (
    <SafeAreaView style={cs.page}>
      <Text style={[cs.titleBlock, cs.titleText]}>Tab 1</Text>
      <Pressable style={cs.buttonBlock} onPress={() => navigation.navigate(Routes.Tab2)}>
        <Text style={cs.buttonText}>Go to Tab2</Text>
      </Pressable>
      <Pressable style={cs.buttonBlock} onPress={() => navigation.goBack()}>
        <Text style={cs.buttonText}>Go back from Tab navigator</Text>
      </Pressable>
    </SafeAreaView>
  )
}

const cs = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'ivory',
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

export default Tab1
