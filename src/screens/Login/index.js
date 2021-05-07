import React from 'react'
import { useDispatch } from 'react-redux'
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

import { setLoading } from '../../redux/reducers/uiSlice'
import Routes from '../../pages'
import cs from './styles'

const Login = ({ navigation, route }) => {
  const dispatch = useDispatch()

  const onSignupPress = () => {
    navigation.navigate(Routes.Signup)
  }

  const onForgotPasswordPress = () => {
    Alert.alert('Forgot password', 'Not implemeted yet :)')
  }

  const handleSubmit = () => {
    dispatch(setLoading(true))
    setTimeout(() => {
      dispatch(setLoading(false))
      Alert.alert('Fake Login request is complete')
    }, 1200)
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
        <Pressable style={cs.submitButton} onPress={handleSubmit}>
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
