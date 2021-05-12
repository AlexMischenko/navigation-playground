import { StyleSheet } from 'react-native'

import { adjustFont, adjustToWidthPrecisely } from '../utils/styleHelpers'
import colors from './colors'

const baseText = {
  color: colors.text,
}

const titleHuge = {
  ...baseText,
  fontSize: adjustFont(60),
  lineHeight: adjustFont(70),
  letterSpacing: adjustToWidthPrecisely(0.25),
}
const titleHugeBold = {
  ...titleHuge,
  fontWeight: '700',
}
const titleLarge = {
  ...baseText,
  fontSize: adjustFont(34),
  lineHeight: adjustFont(41),
  letterSpacing: adjustToWidthPrecisely(0.37),
}
const titleLargeBold = {
  ...titleLarge,
  fontWeight: '700',
}
const title1 = {
  ...baseText,
  fontSize: adjustFont(28),
  lineHeight: adjustFont(34),
  letterSpacing: adjustToWidthPrecisely(0.37),
}
const title1Bold = {
  ...title1,
  fontWeight: '700',
  letterSpacing: adjustToWidthPrecisely(0.87),
}
const title2 = {
  ...baseText,
  fontSize: adjustFont(22),
  lineHeight: adjustFont(28),
  letterSpacing: adjustToWidthPrecisely(0.35),
}
const title2Bold = {
  ...title2,
  fontWeight: '700',
  letterSpacing: adjustToWidthPrecisely(0.8),
}
const title3 = {
  ...baseText,
  fontSize: adjustFont(20),
  lineHeight: adjustFont(25),
  letterSpacing: adjustToWidthPrecisely(0.38),
}
const title3Bold = {
  ...title3,
  fontWeight: '600',
}
const headline = {
  ...baseText,
  fontWeight: '600',
  fontSize: adjustFont(17),
  lineHeight: adjustFont(22),
  letterSpacing: adjustToWidthPrecisely(-0.41),
}
const callout = {
  ...baseText,
  fontSize: adjustFont(16),
  lineHeight: adjustFont(21),
  letterSpacing: adjustToWidthPrecisely(-0.32),
}
const calloutBold = {
  ...callout,
  fontWeight: '600',
}
const subHeadline = {
  ...baseText,
  fontSize: adjustFont(15),
  lineHeight: adjustFont(20),
  letterSpacing: adjustToWidthPrecisely(-0.24),
}
const subHeadlineBold = {
  ...subHeadline,
  fontWeight: '600',
}
const body = {
  ...baseText,
  fontSize: adjustFont(17),
  lineHeight: adjustFont(22),
  letterSpacing: adjustToWidthPrecisely(-0.41),
}
const bodyBold = {
  ...body,
  fontWeight: '600',
}
const footnote = {
  ...baseText,
  fontSize: adjustFont(13),
  lineHeight: adjustFont(18),
  letterSpacing: adjustToWidthPrecisely(-0.08),
}
const footnoteBold = {
  ...footnote,
  fontWeight: '600',
}
const caption1 = {
  ...baseText,
  fontSize: adjustFont(12),
  lineHeight: adjustFont(16),
}
const caption1Bold = {
  ...caption1,
  fontWeight: '500',
}
const caption2 = {
  ...baseText,
  fontSize: adjustFont(11),
  lineHeight: adjustFont(13),
  letterSpacing: adjustToWidthPrecisely(0.06),
}
const caption2Bold = {
  ...caption2,
  fontWeight: '500',
}

const upperCase = {
  textTransform: 'uppercase',
}

const underline = {
  textDecorationLine: 'underline',
}

const sectionText = {
  ...subHeadline,
  color: colors.greyDarken,
}

const errorText = {
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
  sectionText,
  errorText,
})

export default textStyles
