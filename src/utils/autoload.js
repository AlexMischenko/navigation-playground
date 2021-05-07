import { Linking, Platform } from 'react-native'

import { NAVIGATION_STATE_KEY } from './constants'
import { getItem } from './storage'

// TODO: Add `loadEnvironment`

/**
 * Place to restore navigation state, localization, runtime environment key (dev/stage/prod)
 */
const autoload = async () => {
  const restoreNavigationState = async () => {
    try {
      const initialUrl = await Linking.getInitialURL()

      if (Platform.OS !== 'web' && initialUrl == null) {
        // Only restore state if there's no deep link and we're not on web
        const savedStateString = await getItem(NAVIGATION_STATE_KEY)
        return savedStateString ? JSON.parse(savedStateString) : undefined
      }
    } catch (error) {
      console.log('🚀 ~ file: autoload.js ~ line 17 ~ restoreNavigationState ~ error', error)
    }
  }

  const navigationState = await restoreNavigationState()

  return { navigationState }
}

export default autoload
