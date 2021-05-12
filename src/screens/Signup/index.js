import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ScrollView, View, Text, Pressable } from 'react-native'

import Routes from '../../routes'
import { signupValidationSchema } from '../../utils/validators'
import theme from '../../theme'
import Layout from '../../components/Layout'
import StyledFormInput from '../../components/StyledFormInput'
import cs from './styles'

const Signup = ({ navigation, route }) => {
  const formDefaultValues = {
    username: '',
    email: '',
    password: '',
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formDefaultValues,
    resolver: yupResolver(signupValidationSchema),
  })

  const onSubmit = async (data) => {
    console.log('🚀 ~ file: Signup ~ line 30 ~ onSubmit ~ data', data)
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
          <Text style={[cs.titleBlock, theme.textStyles.title1]}>Sign Up</Text>
          <View style={theme.helpers.ph20}>
            <StyledFormInput
              style={theme.helpers.mb16}
              name="username"
              control={control}
              errors={errors}
            />
            <StyledFormInput
              style={theme.helpers.mb16}
              name="email"
              control={control}
              errors={errors}
            />
            <StyledFormInput name="password" control={control} errors={errors} />
            <Pressable style={cs.submitButton} onPress={handleSubmit(onSubmit)}>
              <Text style={[theme.textStyles.title3, cs.whiteColor]}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
        <View style={theme.helpers.alignItemsCenter}>
          <Pressable style={theme.helpers.pb20} onPress={() => navigation.navigate(Routes.Login)}>
            <Text style={theme.textStyles.subHeadline}>
              Already have an account ? <Text style={cs.pressableTextColor}>Sign In.</Text>
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </Layout>
  )
}

export default Signup
