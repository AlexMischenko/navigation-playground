import { without } from 'lodash'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const setItem = (key: string, data: unknown): Promise<void> => {
  return AsyncStorage.setItem(key, JSON.stringify(data))
}

export const getItem = async <T>(key: string): Promise<T | null> => {
  try {
    const data = await AsyncStorage.getItem(key)
    return data && JSON.parse(data)
  } catch (e) {
    return null
  }
}

export const clearAll = async (): Promise<void> => {
  const keys = await AsyncStorage.getAllKeys()
  const filteredKeys = without(
    keys /* HIDE_INSTRUCTIONS_HOST, HIDE_INSTRUCTIONS_GUEST, API_URL_KEY */
  )
  await AsyncStorage.multiRemove(filteredKeys)
}

export const engine = AsyncStorage
