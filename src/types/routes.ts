import { StackNavigationProp } from '@react-navigation/stack'

import Routes from '@routes'

export type IMainStackParamList = {
  Login: undefined,
  SignUp: undefined,
  Page1: undefined,
  Page2: undefined,
  Page3: { title?: string },
  TabsNav: undefined,
}

export interface ITabNavigatorParamList {
  Tab1: undefined;
  Tab2: undefined;
  Tab3: undefined;
}

// TODO: Remove test `Page...` types
export type Page2ScreenNavigationProps = StackNavigationProp<IMainStackParamList, Routes.Page2>
export type Page3ScreenNavigationProps = StackNavigationProp<IMainStackParamList, Routes.Page3>

export type LoginScreenNavigationProp = StackNavigationProp<IMainStackParamList, Routes.Login>
export type SignUpScreenNavigationProp = StackNavigationProp<IMainStackParamList, Routes.SignUp>
