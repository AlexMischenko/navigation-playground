import { refreshUser, loginUser, signUpUser, logoutUser } from '@services/user'
import { setLoading, setSignout } from '@redux/reducers/uiSlice'
import { setCurrentUser, setUserToken, logoutUser as logoutAction } from '@redux/reducers/userSlice'
import { AUTH_TOKEN_KEY } from '@utils/constants'
import * as AsyncStorageUtils from '@utils/storage'
import * as RequestUtils from '@utils/request'
import * as UserServices from '@services/user'
import * as UserApi from '@api/user'

import { mockUserResponse, mockUserRegisterResponse } from '../../src/test-utils/mocks'

jest.mock('@api/user', () => ({
  signUpUser: jest.fn(() => Promise.resolve(mockUserRegisterResponse)),
  loginUser: jest.fn(() => Promise.resolve(mockUserResponse)),
  getUser: jest.fn(() => Promise.resolve(mockUserResponse)),
}))

describe('Testing @services/user', () => {
  it('`refreshUser` service dispatches correct actions', async () => {
    const mockDispatch = jest.fn()

    const response = await refreshUser()(mockDispatch)

    expect(response).toBe(mockUserResponse)
    expect(mockDispatch).toBeCalledWith(setLoading(true))
    expect(mockDispatch).toBeCalledWith(setLoading(false))
    expect(mockDispatch).toBeCalledWith(setCurrentUser(response.user))
  })

  it('`loginUser` service dispatches correct actions', async () => {
    const mockDispatch = jest.fn()
    const asyncStorageSetItemSpy = jest.spyOn(AsyncStorageUtils, 'setItem')
    const refreshUserServiceSpy = jest.spyOn(UserServices, 'refreshUser')

    const response = await loginUser({ username: 'test', password: 'qwerty' })(mockDispatch)

    expect(response).toBe(mockUserResponse)
    expect(mockDispatch).toBeCalledWith(setLoading(true))
    expect(mockDispatch).toBeCalledWith(setLoading(false))
    expect(mockDispatch).toBeCalledWith(setSignout(false))
    expect(mockDispatch).toBeCalledWith(setUserToken(response.token))
    expect(asyncStorageSetItemSpy).toBeCalledWith(AUTH_TOKEN_KEY, response.token)

    if (response.user) {
      expect(mockDispatch).toBeCalledWith(setCurrentUser(response.user))
    } else {
      expect(refreshUserServiceSpy).toBeCalled()
    }
  })

  it('`signUpUser` service dispatches correct actions', async () => {
    const mockDispatch = jest.fn()
    const signUpUserApiSpy = jest.spyOn(UserApi, 'signUpUser')
    const loginUserServiceSpy = jest.spyOn(UserServices, 'loginUser')
    const mockUserInput = {
      username: 'test',
      email: 'mock@test.com',
      password: 'qwerty',
    }

    const response = await signUpUser(mockUserInput)(mockDispatch)

    expect(response).toBe(mockUserRegisterResponse)
    expect(signUpUserApiSpy).toBeCalledWith(mockUserInput)
    expect(loginUserServiceSpy).toBeCalledWith({
      username: mockUserInput.username,
      password: mockUserInput.password,
    })
  })

  it('`logoutUser` service dispatches correct actions', async () => {
    const mockDispatch = jest.fn()
    const asyncStorageClearAllSpy = jest.spyOn(AsyncStorageUtils, 'clearAll')
    const updateTokenUtilSpy = jest.spyOn(RequestUtils, 'updateToken')

    await logoutUser()(mockDispatch)

    expect(asyncStorageClearAllSpy).toBeCalled()
    expect(updateTokenUtilSpy).toBeCalledWith(null)
    expect(mockDispatch).toBeCalledWith(setSignout(true))
    expect(mockDispatch).toBeCalledWith(logoutAction())
  })
})
