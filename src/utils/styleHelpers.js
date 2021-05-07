import { Dimensions, PixelRatio } from 'react-native'
import { defaultDimensions } from './constants'

const themeDeviceWidth = defaultDimensions.width
const deviceWidth = Dimensions.get('window').width

// main adaptive helper
export const adjustToWidth = (x, defaultWidth = themeDeviceWidth) =>
  PixelRatio.roundToNearestPixel((x * deviceWidth) / defaultWidth)

export const getPercentSize = (value) => {
  const res = value / deviceWidth
  return Number(res.toFixed(4))
}

export const percentToValue = (percent) => {
  return deviceWidth * percent
}

// default fonts min = 10, due to UI tips from google
export const scaleMin = (x1, min, scale) => (x1 * scale > min ? x1 * scale : min)
// adjust fonts to some custom scale like Signup checkboxes
export const scaleFont = (x, scale) => scaleMin(x, 8, scale)
// adjust fonts to screen width
export const adjustFont = (x, defaultWidth = themeDeviceWidth) =>
  scaleFont(x, deviceWidth / defaultWidth)

// use it wisely because there is roundToNearestPixel what can cause graphic artifacts
export const adjustToWidthPrecisely = (x, defaultWidth = themeDeviceWidth) =>
  (x * deviceWidth) / defaultWidth

/* eslint-disable no-bitwise */
export const isDarkColor = (color) => {
  // Variables for red, green, blue values
  var r, g, b, hsp

  // Check the format of the color, HEX or RGB?
  if (color.match(/^rgb/)) {
    // If RGB --> store the red, green, blue values in separate variables
    color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/)

    r = color[1]
    g = color[2]
    b = color[3]
  } else {
    // If hex --> Convert it to RGB: http://gist.github.com/983661
    color = +('0x' + color.slice(1).replace(color.length < 5 && /./g, '$&$&'))

    r = color >> 16
    g = (color >> 8) & 255
    b = color & 255
  }

  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b))

  // Using the HSP value, determine whether the color is light or dark
  return hsp < 127.5
}

export const hexOpacity = (hex, opacity) => {
  if (typeof hex !== 'string' || !/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex))
    throw new Error('Invalid hexadecimal color value')
  if (typeof opacity !== 'number' || opacity > 1 || opacity < 0)
    throw new Error('Opacity should be float between 0 - 1')
  let color = hex.substring(1)
  if (color.length === 3) color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2]
  color += Math.round(opacity * 255)
    .toString(16)
    .padStart(2, '0')
  return `#${color}`.toUpperCase()
}
