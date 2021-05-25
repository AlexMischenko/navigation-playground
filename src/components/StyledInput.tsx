import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

import type { IStyledInputProps, ITheme } from '@types'
import { useTheme, useStyleSheet } from '@hooks'
import { adjustToWidth } from '@utils/styleHelpers'

const StyledInput: React.FC<IStyledInputProps> = ({
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
  const theme = useTheme()
  const cs = useStyleSheet(styles)
  const showError = error || disabled

  const handleChangeText = (newValue: string) => {
    if (!validationRegEx || newValue.match(validationRegEx) || newValue === '') {
      setLocalValue(newValue)
      onChangeText(numbersOnly ? parseFloat(newValue) : newValue)
    }
  }

  return (
    <View style={style}>
      <Text style={[cs.inputTitleText, theme.helpers.mb8, titleStyle]}>{title}</Text>
      <View style={[cs.inputBlock, showError && cs.errorBackground]}>
        <TextInput
          {...props}
          style={[theme.helpers.flex1, textInputStyle]}
          value={localValue}
          onChangeText={handleChangeText}
        />
      </View>
    </View>
  )
}

const styles = (theme: ITheme): any =>
  StyleSheet.create({
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
      borderRadius: theme.borderRadius.lg,
      backgroundColor: theme.colors.white,
      shadowColor: theme.colors.grey,
      shadowOpacity: 0.15,
      shadowRadius: adjustToWidth(10),
      shadowOffset: {
        width: adjustToWidth(0),
        height: adjustToWidth(0),
      },
      elevation: 3,
    },
    errorBackground: {
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: 'red',
    },
  })

export default StyledInput
