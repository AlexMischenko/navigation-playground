import { take, fork, call, push, put, cancel, cancelled, SagaReturnType } from 'redux-saga/effects'

import type { ILoginUserPayload } from '../../../types'
import sagaActions from '../sagaActions'
import { refreshUser } from '../../../services/user'

import { loginUser } from '../../../api/user'
import { setCurrentUser, setUserToken, logoutUser } from '../../../redux/reducers/userSlice'
import { setLoading, setSignout } from '../../../redux/reducers/uiSlice'

type TLoginResponse = SagaReturnType<typeof loginUser>

function* authorize({ username, password }: ILoginUserPayload) {
  try {
    const loginResponse: TLoginResponse = yield call(loginUser, { username, password })
    yield put(setLoading(false))
    yield put(setSignout(false))
    yield put(setUserToken(loginResponse.token))

    if (loginResponse.user) {
      yield put(setCurrentUser(loginResponse.user))
    }
    // else {
    //   put(refreshUser())
    // }
    return loginResponse
  } catch (error) {
    yield put(setLoading(false))
    yield put({ type: 'LOGIN_ERROR', error })
  } finally {
    const isCancelled: boolean = yield cancelled()
    if (isCancelled) {
      // ... put special cancellation handling code here
    }
  }
}

export default function* loginFlow() {
  while (true) {
    const { username, password } = yield take(sagaActions.LOGIN_REQUEST)
    // fork return a Task object
    const task = yield fork(authorize, { username, password })
    const action = yield take([logoutUser(), 'LOGIN_ERROR'])
    if (action.type === logoutUser().type) yield cancel(task)
  }
}
