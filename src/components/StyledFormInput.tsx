import React from 'react'
import { Controller } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { View, Text } from 'react-native'

import type { IStyledFormInputProps } from '@types'
import { useTheme } from '@hooks'
import StyledInput from './StyledInput'

const StyledFormInput: React.FC<IStyledFormInputProps> = ({
  control,
  name,
  title,
  errors,
  style,
  ...props
}) => {
  const theme = useTheme()
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <View style={style}>
          <StyledInput
            {...props}
            title={title || name}
            onBlur={onBlur}
            onChangeText={(value: string | number) => onChange(value)}
            value={value}
            autoCapitalize="none"
            error={errors[name]}
            accessibilityLabel={`${name} input`}
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
