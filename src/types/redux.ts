import store from '../redux/store'
import type { ICurrentUser } from './user'

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch

export interface IUiSlice {
  isLoading: boolean;
  isSignout: boolean;
  darkMode: boolean;
}

export interface IUserSlice {
  currentUser: ICurrentUser | null;
  token: string | null;
}
