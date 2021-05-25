import { StyleSheet, StyleProp, TextStyle } from 'react-native'

import { adjustFont, adjustToWidthPrecisely } from '@utils/styleHelpers'
import colors from './colors'

const baseText: StyleProp<TextStyle> = {
  color: colors.text,
}

const titleHuge: StyleProp<TextStyle> = {
  ...baseText,
  fontSize: adjustFont(60),
  lineHeight: adjustFont(70),
  letterSpacing: adjustToWidthPrecisely(0.25),
}
const titleHugeBold: StyleProp<TextStyle> = {
  ...titleHuge,
  fontWeight: '700',
}
const titleLarge: StyleProp<TextStyle> = {
  ...baseText,
  fontSize: adjustFont(34),
  lineHeight: adjustFont(41),
  letterSpacing: adjustToWidthPrecisely(0.37),
}
const titleLargeBold: StyleProp<TextStyle> = {
  ...titleLarge,
  fontWeight: '700',
}
const title1: StyleProp<TextStyle> = {
  ...baseText,
  fontSize: adjustFont(28),
  lineHeight: adjustFont(34),
  letterSpacing: adjustToWidthPrecisely(0.37),
}
const title1Bold: StyleProp<TextStyle> = {
  ...title1,
  fontWeight: '700',
  letterSpacing: adjustToWidthPrecisely(0.87),
}
const title2: StyleProp<TextStyle> = {
  ...baseText,
  fontSize: adjustFont(22),
  lineHeight: adjustFont(28),
  letterSpacing: adjustToWidthPrecisely(0.35),
}
const title2Bold: StyleProp<TextStyle> = {
  ...title2,
  fontWeight: '700',
  letterSpacing: adjustToWidthPrecisely(0.8),
}
const title3: StyleProp<TextStyle> = {
  ...baseText,
  fontSize: adjustFont(20),
  lineHeight: adjustFont(25),
  letterSpacing: adjustToWidthPrecisely(0.38),
}
const title3Bold: StyleProp<TextStyle> = {
  ...title3,
  fontWeight: '600',
}
const headline: StyleProp<TextStyle> = {
  ...baseText,
  fontWeight: '600',
  fontSize: adjustFont(17),
  lineHeight: adjustFont(22),
  letterSpacing: adjustToWidthPrecisely(-0.41),
}
const callout: StyleProp<TextStyle> = {
  ...baseText,
  fontSize: adjustFont(16),
  lineHeight: adjustFont(21),
  letterSpacing: adjustToWidthPrecisely(-0.32),
}
const calloutBold: StyleProp<TextStyle> = {
  ...callout,
  fontWeight: '600',
}
const subHeadline: StyleProp<TextStyle> = {
  ...baseText,
  fontSize: adjustFont(15),
  lineHeight: adjustFont(20),
  letterSpacing: adjustToWidthPrecisely(-0.24),
}
const subHeadlineBold: StyleProp<TextStyle> = {
  ...subHeadline,
  fontWeight: '600',
}
const body: StyleProp<TextStyle> = {
  ...baseText,
  fontSize: adjustFont(17),
  lineHeight: adjustFont(22),
  letterSpacing: adjustToWidthPrecisely(-0.41),
}
const bodyBold: StyleProp<TextStyle> = {
  ...body,
  fontWeight: '600',
}
const footnote: StyleProp<TextStyle> = {
  ...baseText,
  fontSize: adjustFont(13),
  lineHeight: adjustFont(18),
  letterSpacing: adjustToWidthPrecisely(-0.08),
}
const footnoteBold: StyleProp<TextStyle> = {
  ...footnote,
  fontWeight: '600',
}
const caption1: StyleProp<TextStyle> = {
  ...baseText,
  fontSize: adjustFont(12),
  lineHeight: adjustFont(16),
}
const caption1Bold: StyleProp<TextStyle> = {
  ...caption1,
  fontWeight: '500',
}
const caption2: StyleProp<TextStyle> = {
  ...baseText,
  fontSize: adjustFont(11),
  lineHeight: adjustFont(13),
  letterSpacing: adjustToWidthPrecisely(0.06),
}
const caption2Bold: StyleProp<TextStyle> = {
  ...caption2,
  fontWeight: '500',
}

const upperCase: StyleProp<TextStyle> = {
  textTransform: 'uppercase',
}

const underline: StyleProp<TextStyle> = {
  textDecorationLine: 'underline',
}

const capitalize: StyleProp<TextStyle> = {
  textTransform: 'capitalize',
}

const sectionText: StyleProp<TextStyle> = {
  ...subHeadline,
  color: colors.greyDarken,
}

const errorText: StyleProp<TextStyle> = {
  color: colors.error,
}

const textStyles = StyleSheet.create({
  baseText,
  titleHuge,
  titleHugeBold,
  titleLarge,
  titleLargeBold,
  title1,
  title1Bold,
  title2,
  title2Bold,
  title3,
  title3Bold,
  headline,
  callout,
  calloutBold,
  subHeadline,
  subHeadlineBold,
  body,
  bodyBold,
  footnote,
  footnoteBold,
  caption1,
  caption1Bold,
  caption2,
  caption2Bold,
  upperCase,
  underline,
  capitalize,
  sectionText,
  errorText,
})

export default textStyles
