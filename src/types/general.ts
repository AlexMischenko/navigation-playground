import type { InitialState } from '@react-navigation/native'
import type { Edge } from 'react-native-safe-area-context'

export interface IAutoloadResult {
  navigationState?: InitialState;
}

export interface ILoginForm {
  username: string;
  password: string;
}

export interface ISignUpForm {
  username: string;
  email: string;
  password: string;
}

// TODO: Move `ISafeAreaEdges` to "theme" types file
export interface ISafeAreaEdges {
  top: Edge[];
  bottom: Edge[];
  both: Edge[];
}
