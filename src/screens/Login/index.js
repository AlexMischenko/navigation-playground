import * as yup from 'yup'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
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

import { setLoading } from '../../redux/reducers/uiSlice'
import Routes from '../../routes'
import theme from '../../theme'
import StyledInput from '../../components/StyledInput'
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

  const onSubmit = (data) => {
    console.log('🚀 ~ file: index.js ~ line 34 ~ onSubmit ~ data', data)
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
        <Controller
          name="username"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <StyledInput
                style={theme.helpers.mb10}
                title="Username"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                errors={errors}
                autoCapitalize="none"
              />
              <ErrorMessage errors={errors} name="username" as={<Text style={cs.errorText} />} />
            </>
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <StyledInput
                style={theme.helpers.mb10}
                title="Password"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                errors={errors}
                autoCapitalize="none"
              />
              <ErrorMessage errors={errors} name="password" as={<Text style={cs.errorText} />} />
            </>
          )}
        />
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
