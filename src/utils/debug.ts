import _ from 'lodash'
const env = process.env.NODE_ENV

export const log = (message: string, data = {}): void => {
  console.log(message, data)
}

export const requestLog = (data: any, type = 'common'): void => {
  if (env !== 'development') {
    return
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

export const error = (data: any): void => {
  return requestLog(data, 'error')
}
