import axios, { AxiosRequestConfig } from 'axios'

import type { IRequestProps } from '@types'
import { requestLog } from './debug'
import { getUrl } from './url'

export const request = async <T>({ url, method = 'get', ...props }: IRequestProps): Promise<T> => {
  const params: AxiosRequestConfig = {
    url: getUrl(url),
    method,
    ...props,
  }

  requestLog(params)

  return axios(params).then(({ data }) => {
    return data
  })
}

export const engine = axios

export const updateToken = (token: string | null = null): boolean | string => {
  if (!token) {
    return delete engine.defaults.headers.Authorization
  } else {
    return (engine.defaults.headers.Authorization = `Bearer ${token}`)
  }
}

export default request
