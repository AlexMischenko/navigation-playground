import React from 'react'
import { Controller } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { View, Text } from 'react-native'

import theme from '../theme'
import StyledInput from './StyledInput'

const StyledFormInput = ({ control, name, title, errors, style, ...props }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <View style={style}>
          <StyledInput
            title={title || name}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            errors={errors}
            autoCapitalize="none"
            error={errors[name]}
            {...props}
          />
          <ErrorMessage
            errors={errors}
            name={name}
            as={<Text style={[theme.textStyles.errorText, theme.helpers.pl5]} />}
          />
        </View>
      )}
    />
  )
}

export default StyledFormInput
