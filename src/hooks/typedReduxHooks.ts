import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux'

import type { TRootState, TAppDispatch } from '@types'

export const useDispatch = () => useReduxDispatch<TAppDispatch>()
export const useSelector: TypedUseSelectorHook<TRootState> = useReduxSelector
