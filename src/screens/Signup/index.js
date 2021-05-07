import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
  Platform,
  KeyboardAvoidingView,
} from 'react-native'

import Routes from '../../pages'
import cs from './styles'

const Signup = ({ navigation, route }) => {
  const onSinginPress = () => {
    navigation.navigate(Routes.Login)
  }

  return (
    <SafeAreaView style={cs.signupPageContainer}>
      <Text style={[cs.titleBlock, cs.titleText]}>Sign Up</Text>
      <KeyboardAvoidingView
        style={cs.formBlock}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={cs.formInputBlock}>
          <Text>Username</Text>
          <TextInput style={cs.formInput} />
        </View>
        <View style={cs.formInputBlock}>
          <Text>Email</Text>
          <TextInput style={cs.formInput} />
        </View>
        <View style={cs.formInputBlock}>
          <Text>Password</Text>
          <TextInput style={cs.formInput} />
        </View>
        <Pressable style={cs.submitButton}>
          <Text style={cs.submitButtonText}>Sign Un</Text>
        </Pressable>
      </KeyboardAvoidingView>
      <View style={cs.footerBlock}>
        <Pressable style={cs.footerButton} onPress={onSinginPress}>
          <Text style={cs.footerText}>
            Already have an account ? <Text style={cs.signinText}>Sign In.</Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default Signup
