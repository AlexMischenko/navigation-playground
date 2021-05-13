import { without } from 'lodash'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const setItem = (key, data) => {
  return AsyncStorage.setItem(key, JSON.stringify(data))
}

export const getItem = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key)
    return JSON.parse(data)
  } catch (e) {
    return null
  }
}

export const clearAll = async () => {
  const keys = await AsyncStorage.getAllKeys()
  const filteredKeys = without(
    keys /* HIDE_INSTRUCTIONS_HOST, HIDE_INSTRUCTIONS_GUEST, API_URL_KEY */
  )
  await AsyncStorage.multiRemove(filteredKeys)
}
