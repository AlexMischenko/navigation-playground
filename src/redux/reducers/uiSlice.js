import { createSlice } from '@reduxjs/toolkit'

const sliceConfig = createSlice({
  name: 'ui',
  initialState: {
    isLoading: false,
  },
  reducers: {
    setLoading(state, { payload }) {
      state.isLoading = payload
    },
  },
})

export const { setLoading } = sliceConfig.actions

export default sliceConfig.reducer
