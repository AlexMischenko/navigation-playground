import _ from 'lodash'

import {
  loginUser as loginUserApi,
  logoutUser as logoutUserApi,
  signUpUser as signUpUserApi,
  getUser,
} from '../api/user'
import {
  setCurrentUser,
  setUserToken,
  logoutUser as logoutUserAction,
} from '../redux/reducers/userSlice'
import { setLoading, setSignout } from '../redux/reducers/uiSlice'
import { updateToken } from '../utils/request'
import { setItem, clearAll } from '../utils/storage'
import { AUTH_TOKEN_KEY } from '../utils/constants'
import { log } from '../utils/debug'

export const refreshUser = () => (dispatch) => {
  dispatch(setLoading(true))
  return getUser(false)
    .then((user) => {
      dispatch(setLoading(false))
      if (_.isEmpty(user)) {
        return false
      }
      dispatch(setCurrentUser(user))
      return user
    })
    .catch((error) => {
      log('🚀 ~ file: user.js ~ line 23 ~ getUser ~ error', error)
      dispatch(setLoading(false))
      return error
    })
}

export const loginUser = ({ username, password }) => async (dispatch) => {
  dispatch(setLoading(true))

  try {
    const loginResponse = await loginUserApi({ username, password })
    dispatch(setLoading(false))
    dispatch(setSignout(false))
    dispatch(setUserToken(loginResponse.token))
    await setItem(AUTH_TOKEN_KEY, loginResponse.token)

    if (loginResponse.user) {
      dispatch(setCurrentUser(loginResponse.user))
    } else {
      await refreshUser()(dispatch)
    }
    return loginResponse
  } catch (error) {
    log('🚀 ~ file: user.js ~ line 19 ~ loginUser ~ error', error)
    dispatch(setLoading(false))
    return error
  }
}

export const logoutUser = (withRequest = false) => async (dispatch) => {
  if (withRequest) {
    await logoutUserApi()
  }

  await clearAll()
  updateToken(null)
  dispatch(setSignout(true))
  dispatch(logoutUserAction())
}

export const signUpUser = ({ username, email, password }) => (dispatch) => {
  return signUpUserApi({ username, email, password }).then((signUpResult) => {
    return loginUser({ username, password })(dispatch).then(() => {
      return signUpResult
    })
  })
}
