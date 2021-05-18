import React from 'react'
import { StyleSheet, SafeAreaView, Text, Pressable } from 'react-native'

const Tab3 = ({ navigation }: any) => {
  return (
    <SafeAreaView style={cs.page}>
      <Text style={[cs.titleBlock, cs.titleText]}>Tab 3</Text>
      <Pressable style={cs.buttonBlock} onPress={() => navigation.goBack()}>
        <Text style={cs.buttonText}>Go back in Tab navigator</Text>
      </Pressable>
    </SafeAreaView>
  )
}

const cs = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'linen',
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

export default Tab3
