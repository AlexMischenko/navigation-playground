import { all, call, delay, put, take, takeEvery, fork, TakeEffect } from 'redux-saga/effects'

import loginFlow from './user/loginFlow'

export function* helloSaga(): Generator<TakeEffect> {
  while (true) {
    const action = yield take('HELLO_SAGA')
    console.log('🚀 ~ file: index.js ~ line 6 ~ function*helloSaga ~ action', action)
    console.log('Hello Saga!')
  }
}

export function* incrementAsync(payload) {
  console.log('🚀 ~ file: index.js ~ line 8 ~ function*incrementAsync ~ payload', payload)
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([fork(helloSaga), fork(watchIncrementAsync), fork(loginFlow)])
}
