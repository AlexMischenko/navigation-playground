import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { CurrentUser } from '../../types'

interface userState {
  currentUser: CurrentUser;
  token?: string;
}

const initialState: userState = {
  currentUser: null,
  token: null,
}

const sliceConfig = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser(state, { payload }: PayloadAction<CurrentUser>) {
      state.currentUser = { ...payload }
    },
    setUserToken(state, { payload }: PayloadAction<string>) {
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
