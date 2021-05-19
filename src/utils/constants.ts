export const ENV_PROD = 'prod'
export const ENV_STAGE = 'staging'
export const ENV_DEV = 'development'
export const ENV_DEV_OFFICE = 'dev_office'
export const DEFAULT_ENV = ENV_PROD

export const API_URLS = {
  [ENV_PROD]: 'https://api.navigation-playground.app/',
  [ENV_STAGE]: 'https://npdev.ithood.io/',
  [ENV_DEV]: 'https://np.ithood.io/',
  [ENV_DEV_OFFICE]: 'http://46.63.95.66:3000/',
}

export const NAVIGATION_STATE_KEY = 'NAVIGATION_STATE_KEY'
export const AUTH_TOKEN_KEY = 'AUTH_TOKEN_KEY'
export const API_URL_KEY = 'API_URL_KEY'

export const defaultDimensions = {
  width: 414,
}
