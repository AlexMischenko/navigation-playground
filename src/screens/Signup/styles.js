import { StyleSheet } from 'react-native'

import theme from '../../theme'
import { adjustToWidth } from '../../utils/styleHelpers'

export default StyleSheet.create({
  titleBlock: {
    alignSelf: 'center',
    marginBottom: adjustToWidth(20),
  },
  submitButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: adjustToWidth(60),
    marginTop: adjustToWidth(30),
    borderRadius: adjustToWidth(10),
    backgroundColor: theme.colors.green,
  },
  whiteColor: {
    color: theme.colors.white,
  },
  pressableTextColor: {
    color: theme.colors.theme2,
  },
})
