import _ from 'lodash'
const env = process.env.NODE_ENV

export const log = (message, data = {}) => {
  console.log(message, data)
}

export const requestLog = (data, type = 'common') => {
  if (env !== 'development') {
    return null
  }
  const date = new Date()
  const dateString = `[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}]`
  const color = type === 'error' ? '\u001b[31m' : ''
  const colorDefault = type === 'error' ? '\u001b[39m' : ''
  if (_.isString(data)) {
    console.log(`${color}${dateString} (${type}): ${data}${colorDefault}`)
  } else if (_.isObject(data)) {
    console.log(`${color}${dateString} (${type}): ${JSON.stringify(data, null, 2)}${colorDefault}`)
  }
}

export const error = (data) => {
  return requestLog(data, 'error')
}
