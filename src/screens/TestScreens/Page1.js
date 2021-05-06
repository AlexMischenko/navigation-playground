import React from 'react'
import { SafeAreaView, Text, Pressable } from 'react-native'

import Routes from '../../pages'
import cs from './styles'

const Page1 = ({ navigation, route }) => {
  const handleStackNavigation = () => {
    navigation.navigate(Routes.Page2)
  }

  const handleTabNavigation = () => {
    navigation.navigate(Routes.TabsNav)
  }

  const handleTab2Navigation = () => {
    navigation.navigate(Routes.TabsNav, { screen: Routes.Tab2 })
  }

  const handleChangeTitle = () => {
    navigation.setOptions({ title: 'Remaned Title from inside Page1' })
  }

  return (
    <SafeAreaView style={[cs.page, cs.bgPage1]}>
      <Text style={[cs.titleBlock, cs.titleText]}>Page 1</Text>
      <Pressable style={cs.buttonBlock} onPress={handleChangeTitle}>
        <Text style={cs.buttonText}>Update title</Text>
      </Pressable>
      <Pressable style={cs.buttonBlock} onPress={handleStackNavigation}>
        <Text style={cs.buttonText}>Go to Page2</Text>
      </Pressable>
      <Pressable style={cs.buttonBlock} onPress={handleTabNavigation}>
        <Text style={cs.buttonText}>Go to default Tabs</Text>
      </Pressable>
      <Pressable style={cs.buttonBlock} onPress={handleTab2Navigation}>
        <Text style={cs.buttonText}>Go to Tab2</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default Page1
