import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { IUiSlice } from '../../types'

const initialState: IUiSlice = {
  isLoading: false,
  isSignout: false,
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
  },
})

export const { setLoading, setSignout } = sliceConfig.actions

export default sliceConfig.reducer