import { API_URLS, ENV_PROD, ENV_DEV_OFFICE, ENV_STAGE, ENV_DEV } from './utils/constants'

const config = {
  apiRootProd: API_URLS[ENV_PROD],
  apiRootStage: API_URLS[ENV_STAGE],
  apiRootDevelopment: API_URLS[ENV_DEV],
  apiRootDevOffice: API_URLS[ENV_DEV_OFFICE],
}

export default config
