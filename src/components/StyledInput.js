import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

import theme from '../theme'
import { adjustToWidth } from '../utils/styleHelpers'

const StyledInput = ({
  title,
  style,
  titleStyle,
  textInputStyle,
  validationRegEx,
  onChangeText,
  value,
  numbersOnly,
  error,
  disabled,
  ...props
}) => {
  const [localValue, setLocalValue] = useState(value ? `${value}` : '')
  const showError = error || disabled

  const handleChangeText = (newValue) => {
    if (!validationRegEx || newValue.match(validationRegEx) || newValue === '') {
      setLocalValue(newValue)
      onChangeText(numbersOnly ? parseFloat(newValue) : newValue)
    }
  }

  return (
    <View style={style} elevation={5}>
      <Text style={[cs.inputTitleText, theme.helpers.mb8, titleStyle]}>{title}</Text>
      <View style={[cs.inputBlock, showError && cs.errorBackground]} elevation={5}>
        <TextInput
          style={[theme.helpers.flex1, textInputStyle]}
          {...props}
          value={localValue}
          onChangeText={handleChangeText}
        />
      </View>
    </View>
  )
}

const cs = StyleSheet.create({
  inputTitleText: {
    ...theme.textStyles.callout,
    textTransform: 'capitalize',
  },
  inputBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: adjustToWidth(64),
    paddingLeft: adjustToWidth(17),
    paddingRight: adjustToWidth(16.5),
    borderRadius: adjustToWidth(16),
    backgroundColor: theme.colors.white,
    shadowColor: theme.colors.grey,
    shadowOpacity: 0.15,
    shadowRadius: adjustToWidth(10),
    shadowOffset: {
      width: adjustToWidth(0),
      height: adjustToWidth(0),
    },
  },
  errorBackground: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'red',
  },
})

export default StyledInput
