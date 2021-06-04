import { combineReducers } from '@reduxjs/toolkit'

import uiReducer from './uiSlice'
import userReducer from './userSlice'

const rootReducer = combineReducers({
  ui: uiReducer,
  user: userReducer,
})

export default rootReducer
