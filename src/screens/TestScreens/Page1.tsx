import React from 'react'
import { SafeAreaView, Text, Pressable } from 'react-native'

import { useDispatch } from '@hooks'
import { logoutUser } from '@services/user'
import Routes from '@routes'
import cs from './styles'

const Page1 = ({ navigation }: any) => {
  const dispatch = useDispatch()

  const handleChangeTitle = () => {
    navigation.setOptions({ title: 'Remaned Title from inside Page1' })
  }

  const handleTab2Navigation = () => {
    navigation.navigate(Routes.TabsNav, { screen: Routes.Tab2, initial: false })
  }

  const handleLogout = () => {
    logoutUser()(dispatch)
  }

  return (
    <SafeAreaView style={[cs.page, cs.bgPage1]}>
      <Text style={[cs.titleBlock, cs.titleText]}>Page 1</Text>
      <Pressable style={cs.buttonBlock} onPress={handleChangeTitle}>
        <Text style={cs.buttonText}>Update title</Text>
      </Pressable>
      <Pressable style={cs.buttonBlock} onPress={() => navigation.navigate(Routes.Page2)}>
        <Text style={cs.buttonText}>Go to Page2</Text>
      </Pressable>
      <Pressable style={cs.buttonBlock} onPress={handleTab2Navigation}>
        <Text style={cs.buttonText}>Go to Tab2</Text>
      </Pressable>
      <Pressable style={cs.buttonBlock} onPress={() => navigation.navigate(Routes.TabsNav)}>
        <Text style={cs.buttonText}>Go to default Tabs</Text>
      </Pressable>
      <Pressable style={cs.buttonBlock} onPress={() => navigation.navigate(Routes.Modal1)}>
        <Text style={cs.buttonText}>Open Modal1</Text>
      </Pressable>
      <Pressable style={cs.buttonBlock} onPress={() => navigation.navigate(Routes.Modal2)}>
        <Text style={cs.buttonText}>Open Modal2</Text>
      </Pressable>
      <Pressable style={cs.buttonBlock} onPress={handleLogout}>
        <Text style={cs.buttonText}>Logout</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default Page1
