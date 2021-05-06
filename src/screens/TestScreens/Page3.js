import React from 'react'
import { SafeAreaView, Text, Pressable } from 'react-native'

import Routes from '../../pages'
import cs from './styles'

const Page3 = ({ navigation, route }) => {
  const handleNavigation = () => {
    navigation.navigate(Routes.Page1)
  }

  const handleTabNavigation = () => {
    navigation.navigate(Routes.TabsNav)
  }

  return (
    <SafeAreaView style={[cs.page, cs.bgPage3]}>
      <Text style={[cs.titleBlock, cs.titleText]}>Page 3</Text>
      <Pressable style={cs.buttonBlock} onPress={handleNavigation}>
        <Text style={cs.buttonText}>Go to Page1</Text>
      </Pressable>
      <Pressable style={cs.buttonBlock} onPress={handleTabNavigation}>
        <Text style={cs.buttonText}>Go to default Tabs</Text>
      </Pressable>
    </SafeAreaView>
  )
}
export default Page3
