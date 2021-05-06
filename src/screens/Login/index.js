import React from 'react'
import { SafeAreaView, View, Text, TextInput, Pressable } from 'react-native'

import cs from './styles'

const Login = ({ navigation, route }) => {
  return (
    <SafeAreaView style={cs.loginPageContainer}>
      <Text style={[cs.titleBlock, cs.titleText]}>Login</Text>
      <View style={cs.formBlock}>
        <View style={cs.formInputBlock}>
          <Text>Username</Text>
          <TextInput style={cs.formInput} />
        </View>
        <View style={cs.formInputBlock}>
          <Text>Password</Text>
          <TextInput style={cs.formInput} />
        </View>
        <Pressable style={cs.submitButton}>
          <Text style={cs.submitButtonText}>Log In</Text>
        </Pressable>
      </View>
      <View style={cs.footerBlock}>
        <Pressable style={cs.footerButton}>
          <Text>Sign Up</Text>
        </Pressable>
        <Pressable style={cs.footerButton}>
          <Text>Forgot password</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default Login
