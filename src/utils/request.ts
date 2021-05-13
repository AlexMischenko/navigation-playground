import axios from 'axios'

import { requestLog } from './debug'
import { getUrl } from './url'

export const request = async ({ url, type, method = 'get', ...props }) => {
  const params = {
    url: getUrl(url, type),
    method,
    ...props,
  }

  requestLog(params)

  return axios(params).then(({ data }) => {
    return data
  })
}

export const engine = axios

export const updateToken = (token = null) => {
  if (!token) {
    return delete engine.defaults.headers.Authorization
  } else {
    return (engine.defaults.headers.Authorization = `Bearer ${token}`)
  }
}

export default request
