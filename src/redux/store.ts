import { configureStore } from '@reduxjs/toolkit'

import uiReducer from './reducers/uiSlice'
import userReducer from './reducers/userSlice'

const store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
  },
})

export default store
