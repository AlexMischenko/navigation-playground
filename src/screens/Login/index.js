import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ScrollView, View, Text, Pressable, Alert } from 'react-native'

import { loginUser } from '../../services/user'
import Routes from '../../routes'
import { loginValidationSchema } from '../../utils/validators'
import theme from '../../theme'
import Layout from '../../components/Layout'
import StyledFormInput from '../../components/StyledFormInput'
import cs from './styles'

const Login = ({ navigation, route }) => {
  const dispatch = useDispatch()

  const formDefaultValues = {
    username: '',
    password: '',
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formDefaultValues,
    resolver: yupResolver(loginValidationSchema),
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
    <Layout keyboardPosition>
      <ScrollView
        contentContainerStyle={theme.helpers.scrollWrap}
        keyboardShouldPersistTaps="handled"
        bounces={false}
      >
        <View style={theme.helpers.flex1} />
        <View style={theme.helpers.flex1JustifyContentCenter}>
          <Text style={[cs.titleBlock, theme.textStyles.title1]}>Login</Text>
          <View style={theme.helpers.ph20}>
            <StyledFormInput
              style={theme.helpers.mb16}
              name="username"
              control={control}
              errors={errors}
            />
            <StyledFormInput name="password" control={control} errors={errors} />
            <Pressable style={cs.submitButton} onPress={handleSubmit(onSubmit)}>
              <Text style={[theme.textStyles.title3, cs.whiteColor]}>Log In</Text>
            </Pressable>
          </View>
        </View>
        <View style={theme.helpers.alignItemsCenter}>
          <Pressable style={theme.helpers.pb20} onPress={onSignupPress}>
            <Text style={[theme.textStyles.subHeadlineBold, cs.pressableTextColor]}>Sign Up</Text>
          </Pressable>
          <Pressable style={theme.helpers.pb20} onPress={onForgotPasswordPress}>
            <Text style={theme.textStyles.subHeadline}>Forgot password ?</Text>
          </Pressable>
        </View>
      </ScrollView>
    </Layout>
  )
}

export default Login
