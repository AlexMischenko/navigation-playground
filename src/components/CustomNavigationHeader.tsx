import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import type { StackHeaderProps } from '@react-navigation/stack'

const CustomNavigationHeader: React.FC<StackHeaderProps> = ({
  navigation,
  scene: { route, descriptor },
}) => {
  const { options } = descriptor
  const params: any = route.params
  const paramsTitle = params?.title

  return (
    <View style={cs.headerContainer}>
      <Pressable style={cs.backButtonBlock} onPress={() => navigation.goBack()}>
        <Text style={cs.backButtonText}>Back</Text>
      </Pressable>
      <Text style={cs.titleText}>{paramsTitle || options.title}</Text>
    </View>
  )
}

const cs = StyleSheet.create({
  headerContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 100, // TODO: Fix Header height to fit iOS & Android
    paddingBottom: 10,
    backgroundColor: '#34C759',
  },
  backButtonBlock: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  backButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A80F0',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})

export default CustomNavigationHeader
