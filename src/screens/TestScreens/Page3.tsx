import React from 'react'
import { SafeAreaView, Text, Pressable } from 'react-native'

import type { IPage3ScreenProps } from '@types'
import Routes from '@routes'
import cs from './styles'

const Page3: React.FC<IPage3ScreenProps> = ({ navigation }) => {
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
