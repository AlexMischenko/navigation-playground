import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { IUiSlice } from '@types'

const initialState: IUiSlice = {
  isLoading: false,
  isSignout: false,
  darkMode: false,
}

const sliceConfig = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload
    },
    setSignout(state, { payload }: PayloadAction<boolean>) {
      state.isSignout = payload
    },
    setDarkMode(state, { payload }: PayloadAction<boolean>) {
      state.darkMode = payload
    },
  },
})

export const { setLoading, setSignout, setDarkMode } = sliceConfig.actions

export default sliceConfig.reducer
