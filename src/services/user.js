import _ from 'lodash'

import { loginUser as loginUserApi, logoutUser as logoutUserApi, getUser } from '../api/user'
import {
  setCurrentUser,
  setUserToken,
  logoutUser as logoutUserAction,
} from '../redux/reducers/userSlice'
import { setLoading } from '../redux/reducers/uiSlice'
import { updateToken } from '../utils/request'
import { clearAll } from '../utils/storage'
import { log } from '../utils/debug'

export const loginUser = ({ username, password }) => async (dispatch) => {
  dispatch(setLoading(true))

  try {
    const loginResponse = await loginUserApi({ username, password })
    dispatch(setLoading(false))
    dispatch(setUserToken(loginResponse.token))

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

export const refreshUser = () => (dispatch) => {
  dispatch(setLoading(true))
  return getUser()
    .then((user) => {
      dispatch(setLoading(false))
      if (_.isEmpty(user)) {
        return false
      }
      dispatch(setCurrentUser(user))
    })
    .catch((error) => {
      log('🚀 ~ file: user.js ~ line 23 ~ getUser ~ error', error)
      dispatch(setLoading(false))
    })
}

export const logoutUser = (withRequest = false) => async (dispatch) => {
  if (withRequest) {
    await logoutUserApi()
  }

  await clearAll()
  updateToken(null)
  dispatch(logoutUserAction())
}
