import React from 'react'
import { Controller } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { StyleSheet, View, Text } from 'react-native'

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
            {...props}
          />
          <ErrorMessage errors={errors} name="username" as={<Text style={cs.errorText} />} />
        </View>
      )}
    />
  )
}

const cs = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 12,
  },
})

export default StyledFormInput
