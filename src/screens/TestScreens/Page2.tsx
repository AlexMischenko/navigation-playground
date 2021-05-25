import React from 'react'
import { SafeAreaView, Text, Pressable } from 'react-native'

import type { IPage2ScreenProps } from '@types'
import Routes from '@routes'
import cs from './styles'

const Page2: React.FC<IPage2ScreenProps> = ({ navigation }) => {
  const handleNavigation = () => {
    navigation.navigate(Routes.Page3, { title: 'Title passed from Page2' })
  }

  const handleTabNavigation = () => {
    navigation.navigate('TabsNav')
  }

  return (
    <SafeAreaView style={[cs.page, cs.bgPage2]}>
      <Text style={[cs.titleBlock, cs.titleText]}>Page 2</Text>
      <Pressable style={cs.buttonBlock} onPress={handleNavigation}>
        <Text style={cs.buttonText}>Go to Page3</Text>
      </Pressable>
      <Pressable style={cs.buttonBlock} onPress={handleTabNavigation}>
        <Text style={cs.buttonText}>Go to default Tabs</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default Page2
