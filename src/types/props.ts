import React from 'react'
import type { AxiosRequestConfig } from 'axios'
import type { Control, FieldErrors } from 'react-hook-form'
import type {
  TextInputProps,
  StyleProp,
  TextStyle,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native'
import type { InitialState } from '@react-navigation/native'
import type { Edge } from 'react-native-safe-area-context'

import type {
  LoginScreenNavigationProp,
  SignUpScreenNavigationProp,
  Page2ScreenNavigationProps,
  Page3ScreenNavigationProps,
} from './routes'

export interface IRequestProps extends AxiosRequestConfig {
  url: string;
}

export interface ILayoutProps {
  background?: string;
  backgroundImage?: ImageSourcePropType;
  edges?: Edge[];
  container?: boolean;
  keyboardPosition?: boolean;
  noKeyboard?: boolean;
}

export interface IConditionalWrapperProps {
  condition: boolean;
  wrapper: (children: React.ReactNode) => any;
}

export interface IStyledInputProps extends Omit<TextInputProps, 'value'> {
  onChangeText: (value: string | number) => void;
  value?: string | number;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  textInputStyle?: StyleProp<TextStyle | ViewStyle>;
  validationRegEx?: RegExp;
  error?: boolean;
  disabled?: boolean;
  numbersOnly?: boolean;
}

export interface IStyledFormInputProps extends Omit<IStyledInputProps, 'onChangeText'> {
  control: Control<any>; // Used "any" to avoid specific form type specification
  errors: FieldErrors;
  name: string;
}

export interface IPage2ScreenProps {
  navigation: Page2ScreenNavigationProps;
}
export interface IPage3ScreenProps {
  navigation: Page3ScreenNavigationProps;
}

export interface IRootNavigatorProps {
  initialState?: InitialState;
}

export interface ILoginScreenProps {
  navigation: LoginScreenNavigationProp;
}

export interface ISignUpScreenProps {
  navigation: SignUpScreenNavigationProp;
}
