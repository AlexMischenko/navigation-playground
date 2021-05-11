import { createSlice } from '@reduxjs/toolkit'

const sliceConfig = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    token: null,
  },
  reducers: {
    setCurrentUser(state, { payload }) {
      state.currentUser = { ...payload }
    },
    setUserToken(state, { payload }) {
      state.token = payload
    },
    logoutUser(state) {
      state.currentUser = null
      state.token = null
    },
  },
})

export const { setCurrentUser, setUserToken, logoutUser } = sliceConfig.actions

export default sliceConfig.reducer
