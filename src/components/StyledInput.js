import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

import { adjustToWidth, adjustFont } from '../utils/styleHelpers'

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
    <View style={[cs.inputContainer, style]} elevation={5}>
      <Text style={[cs.inputTitleText, cs.titleMargin, titleStyle]}>{title}</Text>
      <View style={[cs.inputBlock, showError && cs.errorBackground]} elevation={5}>
        <TextInput
          style={[cs.input, textInputStyle]}
          {...props}
          value={localValue}
          onChangeText={handleChangeText}
        />
      </View>
    </View>
  )
}

const cs = StyleSheet.create({
  inputContainer: {},
  inputTitleText: {
    fontSize: adjustFont(14),
    color: 'black',
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
    backgroundColor: 'white',
    shadowColor: 'gray',
    shadowOpacity: 0.07,
    shadowRadius: adjustToWidth(10),
    shadowOffset: {
      width: adjustToWidth(0),
      height: adjustToWidth(0),
    },
  },
  input: {
    flex: 1,
  },
  titleMargin: {
    marginBottom: adjustToWidth(9.5),
  },
  errorBackground: {
    borderWidth: adjustToWidth(1),
    borderColor: 'red',
  },
})

export default StyledInput
