import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native'

import { adjustToWidth } from '@utils/styleHelpers'
import { defaultDimensions } from '@utils/constants'
import colors from './colors'

const { height, width } = Dimensions.get('window')

export const isIos = Platform.OS === 'ios'
export const isAndroid = Platform.OS === 'android'

const statusBarOffset = isAndroid && StatusBar.currentHeight ? StatusBar.currentHeight : 0
const headerWrapperHeight = adjustToWidth(44)
const tabBarHeight = adjustToWidth(49)
const isSmallScreen = width / height >= 0.56
export const headerDimensions = {
  height: headerWrapperHeight,
  fullHeight: headerWrapperHeight + statusBarOffset,
}

export const sizes = {
  screenHeight: height,
  screenWidth: width,
  defaultDimensions,
  statusBarOffset,
  headerWrapperHeight,
  tabBarHeight,
  headerDimensions,
  isSmallScreen,
}

const margins = {
  // marginTop
  mt5: {
    marginTop: adjustToWidth(5),
  },
  mt8: {
    marginTop: adjustToWidth(8),
  },
  mt10: {
    marginTop: adjustToWidth(10),
  },
  mt15: {
    marginTop: adjustToWidth(15),
  },
  mt16: {
    marginTop: adjustToWidth(16),
  },
  mt20: {
    marginTop: adjustToWidth(20),
  },

  // marginBottom
  mb5: {
    marginBottom: adjustToWidth(5),
  },
  mb8: {
    marginBottom: adjustToWidth(8),
  },
  mb10: {
    marginBottom: adjustToWidth(10),
  },
  mb15: {
    marginBottom: adjustToWidth(15),
  },
  mb16: {
    marginBottom: adjustToWidth(16),
  },
  mb20: {
    marginBottom: adjustToWidth(20),
  },

  // marginLeft
  ml5: {
    marginLeft: adjustToWidth(5),
  },
  ml10: {
    marginLeft: adjustToWidth(10),
  },
  ml15: {
    marginLeft: adjustToWidth(15),
  },
  ml16: {
    marginLeft: adjustToWidth(16),
  },
  ml28: {
    marginLeft: adjustToWidth(28),
  },
  ml59: {
    marginLeft: adjustToWidth(59),
  },

  //marginRight
  mr5: {
    marginRight: adjustToWidth(5),
  },
  mr10: {
    marginRight: adjustToWidth(10),
  },
  mr15: {
    marginRight: adjustToWidth(15),
  },
  mr16: {
    marginRight: adjustToWidth(16),
  },
  mr20: {
    marginRight: adjustToWidth(20),
  },

  // marginVertical
  mv5: {
    marginVertical: adjustToWidth(5),
  },
  mv10: {
    marginVertical: adjustToWidth(10),
  },
  mv15: {
    marginVertical: adjustToWidth(15),
  },
  mv16: {
    marginVertical: adjustToWidth(16),
  },
  mv20: {
    marginVertical: adjustToWidth(20),
  },

  // marginHorizontal
  mh4: {
    marginHorizontal: adjustToWidth(4),
  },
  mh5: {
    marginHorizontal: adjustToWidth(5),
  },
  mh10: {
    marginHorizontal: adjustToWidth(10),
  },
  mh15: {
    marginHorizontal: adjustToWidth(15),
  },
  mh16: {
    marginHorizontal: adjustToWidth(16),
  },

  // marginAll
  ma5: {
    margin: adjustToWidth(5),
  },
  ma10: {
    margin: adjustToWidth(10),
  },
  ma15: {
    margin: adjustToWidth(15),
  },
  ma16: {
    margin: adjustToWidth(16),
  },
  ma20: {
    margin: adjustToWidth(20),
  },

  // negative helpers
  mt8n: {
    marginTop: adjustToWidth(-8),
  },
  mt16n: {
    marginTop: adjustToWidth(-16),
  },
  ml16n: {
    marginLeft: adjustToWidth(-16),
  },
  mr16n: {
    marginRight: adjustToWidth(-16),
  },
  mh16n: {
    marginHorizontal: adjustToWidth(-16),
  },
}

const paddings = {
  // paddingTop
  pt5: {
    paddingTop: adjustToWidth(5),
  },
  pt8: {
    paddingTop: adjustToWidth(8),
  },
  pt10: {
    paddingTop: adjustToWidth(10),
  },
  pt15: {
    paddingTop: adjustToWidth(15),
  },
  pt16: {
    paddingTop: adjustToWidth(16),
  },
  pt20: {
    paddingTop: adjustToWidth(20),
  },

  // paddingBottom
  pb5: {
    paddingBottom: adjustToWidth(5),
  },
  pb8: {
    paddingBottom: adjustToWidth(8),
  },
  pb10: {
    paddingBottom: adjustToWidth(10),
  },
  pb15: {
    paddingBottom: adjustToWidth(15),
  },
  pb16: {
    paddingBottom: adjustToWidth(16),
  },
  pb20: {
    paddingBottom: adjustToWidth(20),
  },

  // paddingLeft
  pl5: {
    paddingLeft: adjustToWidth(5),
  },
  pl10: {
    paddingLeft: adjustToWidth(10),
  },
  pl15: {
    paddingLeft: adjustToWidth(15),
  },
  pl16: {
    paddingLeft: adjustToWidth(16),
  },
  pl20: {
    paddingLeft: adjustToWidth(20),
  },
  pl28: {
    paddingLeft: adjustToWidth(28),
  },
  pl59: {
    paddingLeft: adjustToWidth(59),
  },

  //paddingRight
  pr5: {
    paddingRight: adjustToWidth(5),
  },
  pr10: {
    paddingRight: adjustToWidth(10),
  },
  pr15: {
    paddingRight: adjustToWidth(15),
  },
  pr16: {
    paddingRight: adjustToWidth(16),
  },
  pr20: {
    paddingRight: adjustToWidth(20),
  },

  // paddingVertical
  pv5: {
    paddingVertical: adjustToWidth(5),
  },
  pv10: {
    paddingVertical: adjustToWidth(10),
  },
  pv15: {
    paddingVertical: adjustToWidth(15),
  },
  pv16: {
    paddingVertical: adjustToWidth(16),
  },
  pv20: {
    paddingVertical: adjustToWidth(20),
  },

  // paddingHorizontal
  ph4: {
    paddingHorizontal: adjustToWidth(4),
  },
  ph5: {
    paddingHorizontal: adjustToWidth(5),
  },
  ph10: {
    paddingHorizontal: adjustToWidth(10),
  },
  ph15: {
    paddingHorizontal: adjustToWidth(15),
  },
  ph16: {
    paddingHorizontal: adjustToWidth(16),
  },
  ph20: {
    paddingHorizontal: adjustToWidth(20),
  },
  ph30: {
    paddingHorizontal: adjustToWidth(30),
  },

  // paddingAll
  pa5: {
    padding: adjustToWidth(5),
  },
  pa10: {
    padding: adjustToWidth(10),
  },
  pa15: {
    padding: adjustToWidth(15),
  },
  pa16: {
    padding: adjustToWidth(16),
  },
  pa20: {
    padding: adjustToWidth(20),
  },
}

export const layoutHelpers = StyleSheet.create({
  ...margins,
  ...paddings,
  flex1: {
    flex: 1,
  },
  flex1JustifyContentCenter: {
    flex: 1,
    justifyContent: 'center',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  flexRow: {
    flexDirection: 'row',
  },
  alignItemsEnd: {
    alignItems: 'flex-end',
  },
  alignItemStart: {
    alignItems: 'flex-start',
  },
  safeArea: {
    flex: 1,
    paddingTop: statusBarOffset,
  },
  scrollWrap: {
    flexGrow: 1,
    paddingHorizontal: adjustToWidth(20),
    justifyContent: 'space-between',
  },

  page: {
    flex: 1,
    backgroundColor: colors.background,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.black80,
  },
  hiddenButtonWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 9999,
  },
  hiddenButton: {
    width: adjustToWidth(50),
    height: adjustToWidth(50),
  },
  homeBar: {
    width: '100%',
    marginVertical: adjustToWidth(8),
  },
  flexColumnCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hitSlop: {
    top: 20,
    left: 20,
    bottom: 20,
    right: 20,
  },
})

export default layoutHelpers
