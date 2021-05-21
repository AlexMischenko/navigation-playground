import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas'
import uiReducer from './reducers/uiSlice'
import userReducer from './reducers/userSlice'

const sagaMiddleware = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]

const store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
  },
  middleware,
})

sagaMiddleware.run(rootSaga)

export default store
