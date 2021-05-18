import { trimStart, trimEnd } from 'lodash'

import config from '../config'
import { ENV_STAGE, ENV_DEV, ENV_PROD } from './constants'

export const getUrl = (path: string): string => {
  const env = process.env.ENV
  let apiUrl = config.apiRootStage
  switch (env) {
    case ENV_PROD:
      apiUrl = config.apiRootProd
      break
    case ENV_STAGE:
      apiUrl = config.apiRootStage
      break
    case ENV_DEV:
      apiUrl = config.apiRootDevelopment
  }

  return `${trimEnd(apiUrl, '/')}/${trimStart(path, '/')}`
}
