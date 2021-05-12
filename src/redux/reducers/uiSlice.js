import { createSlice } from '@reduxjs/toolkit'

const sliceConfig = createSlice({
  name: 'ui',
  initialState: {
    isLoading: false,
    isSignout: false,
  },
  reducers: {
    setLoading(state, { payload }) {
      state.isLoading = payload
    },
    setSignout(state, { payload }) {
      state.isSignout = payload
    },
  },
})

export const { setLoading, setSignout } = sliceConfig.actions

export default sliceConfig.reducer
