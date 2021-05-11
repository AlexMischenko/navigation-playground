import * as yup from 'yup'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  Platform,
  KeyboardAvoidingView,
  Alert,
} from 'react-native'

import { loginUser } from '../../services/user'
import Routes from '../../routes'
import theme from '../../theme'
import StyledFormInput from '../../components/StyledFormInput'
import cs from './styles'

const Login = ({ navigation, route }) => {
  const dispatch = useDispatch()

  const formDefaultValues = {
    username: '',
    password: '',
  }

  const fieldSchema = yup.object().shape({
    username: yup
      .string()
      .required('Is required')
      .matches(/^[a-z0-9_]+$/, 'Only lowercase letters, digits and underscores'),
    password: yup
      .string()
      .required('Is required')
      .matches(/^[a-zA-Z0-9_]+$/, 'Only letters, digits and underscores'),
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formDefaultValues,
    resolver: yupResolver(fieldSchema),
  })

  const onSignupPress = () => {
    navigation.navigate(Routes.Signup)
  }

  const onForgotPasswordPress = () => {
    Alert.alert('Forgot password', 'Not implemeted yet :)')
  }

  const onSubmit = async (data) => {
    loginUser(data)(dispatch)
  }

  return (
    <SafeAreaView style={cs.loginPageContainer}>
      <Text style={[cs.titleBlock, cs.titleText]}>Login</Text>
      <KeyboardAvoidingView
        style={cs.formBlock}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <StyledFormInput
          style={theme.helpers.mb16}
          name="username"
          control={control}
          errors={errors}
        />
        <StyledFormInput name="password" control={control} errors={errors} />
        <Pressable style={cs.submitButton} onPress={handleSubmit(onSubmit)}>
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
