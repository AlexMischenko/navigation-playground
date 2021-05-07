import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
  Platform,
  KeyboardAvoidingView,
  Alert,
} from 'react-native'

import Routes from '../../pages'
import cs from './styles'

const Login = ({ navigation, route }) => {
  const onSignupPress = () => {
    navigation.navigate(Routes.Signup)
  }

  const onForgotPasswordPress = () => {
    Alert.alert('Forgot password', 'Not implemeted yet :)')
  }

  return (
    <SafeAreaView style={cs.loginPageContainer}>
      <Text style={[cs.titleBlock, cs.titleText]}>Login</Text>
      <KeyboardAvoidingView
        style={cs.formBlock}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
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
      </KeyboardAvoidingView>
      <View style={cs.footerBlock}>
        <Pressable style={cs.footerButton} onPress={onSignupPress}>
          <Text style={[cs.footerText, cs.pressableText]}>Sign Up</Text>
        </Pressable>
        <Pressable style={cs.footerButton} onPress={onForgotPasswordPress}>
          <Text style={cs.footerText}>Forgot password ?</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default Login
