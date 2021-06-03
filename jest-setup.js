import { jest } from '@jest/globals'
import './node_modules/react-native-gesture-handler/jestSetup'
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock'
import mockNetinfo from 'node_modules/@react-native-community/netinfo/jest/netinfo-mock'

global.window = {}
global.window = global
jest.useFakeTimers()

/**
 * Mock native modules here
 */

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage)
jest.mock('@react-native-community/netinfo', () => mockNetinfo)
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')
