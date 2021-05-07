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
  },
})

export const { setCurrentUser } = sliceConfig.actions

export default sliceConfig.reducer
