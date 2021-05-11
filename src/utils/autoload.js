import { Linking, Platform } from 'react-native'

import { NAVIGATION_STATE_KEY, AUTH_TOKEN_KEY, API_URL_KEY, DEFAULT_ENV } from './constants'
import { getItem } from './storage'

const loadEnv = () => {
  process.env.ENV = DEFAULT_ENV

  return getItem(API_URL_KEY).then((env) => {
    process.env.ENV = env || DEFAULT_ENV
  })
}

const loadToken = () => {
  return getItem(AUTH_TOKEN_KEY).catch(console.log)
}

const loadNavigationState = async () => {
  try {
    const initialUrl = await Linking.getInitialURL()

    if (Platform.OS !== 'web' && initialUrl == null) {
      // Only restore state if there's no deep link and we're not on web
      const savedStateString = await getItem(NAVIGATION_STATE_KEY)
      return savedStateString ? JSON.parse(savedStateString) : undefined
    }
  } catch (error) {
    console.log('🚀 ~ file: autoload.js ~ line 17 ~ loadNavigationState ~ error', error)
  }
}

/**
 * Place to restore navigation state, localization, runtime environment key (dev/stage/prod)
 */
const autoload = async () => {
  await loadEnv()
  const token = await loadToken()
  let navigationState = null

  if (token) {
    // Restore Navigation state only for logged in users
    navigationState = await loadNavigationState()
  }

  return { navigationState }
}

export default autoload
