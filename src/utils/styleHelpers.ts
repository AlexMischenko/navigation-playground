import { Dimensions, PixelRatio } from 'react-native'
import { defaultDimensions } from './constants'

const themeDeviceWidth = defaultDimensions.width
const deviceWidth = Dimensions.get('window').width

// main adaptive helper
export const adjustToWidth = (x: number, defaultWidth = themeDeviceWidth): number =>
  PixelRatio.roundToNearestPixel((x * deviceWidth) / defaultWidth)

export const getPercentSize = (value: number): number => {
  const res = value / deviceWidth
  return Number(res.toFixed(4))
}

export const percentToValue = (percent: number): number => {
  return deviceWidth * percent
}

// default fonts min = 10, due to UI tips from google
export const scaleMin = (x1: number, min: number, scale: number): number =>
  x1 * scale > min ? x1 * scale : min
// adjust fonts to some custom scale like SignUp checkboxes
export const scaleFont = (x: number, scale: number): number => scaleMin(x, 8, scale)
// adjust fonts to screen width
export const adjustFont = (x: number, defaultWidth = themeDeviceWidth): number =>
  scaleFont(x, deviceWidth / defaultWidth)

// use it wisely because there is roundToNearestPixel what can cause graphic artifacts
export const adjustToWidthPrecisely = (x: number, defaultWidth = themeDeviceWidth): number =>
  (x * deviceWidth) / defaultWidth

/* eslint-disable no-bitwise */
export const isDarkColor = (color: string): boolean => {
  // Variables for red, green, blue values
  let r: number, g: number, b: number

  // Check the format of the color, HEX or RGB?
  if (color.match(/^rgb/)) {
    // If RGB --> store the red, green, blue values in separate variables
    const rgbChannels =
      color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/) || []

    r = +rgbChannels[1]
    g = +rgbChannels[2]
    b = +rgbChannels[3]
  } else {
    // If hex --> Convert it to RGB: http://gist.github.com/983661
    const hexNum = +('0x' + color.slice(1).replace(color.length < 5 ? /./g : /^$/g, '$&$&'))

    r = hexNum >> 16
    g = (hexNum >> 8) & 255
    b = hexNum & 255
  }

  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b))

  // Using the HSP value, determine whether the color is light or dark
  return hsp < 127.5
}

export const hexOpacity = (hex: string, opacity: number): string => {
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
