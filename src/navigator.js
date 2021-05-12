import 'react-native-gesture-handler'
import { isEmpty } from 'lodash'
import * as React from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import CustomNavigationHeader from './components/CustomNavigationHeader'
import { NAVIGATION_STATE_KEY } from './utils/constants'
import { setItem } from './utils/storage'

import Routes from './routes'
import Page1 from './screens/TestScreens/Page1'
import Page2 from './screens/TestScreens/Page2'
import Page3 from './screens/TestScreens/Page3'
import Tab1 from './screens/TestScreens/Tab1'
import Tab2 from './screens/TestScreens/Tab2'
import Tab3 from './screens/TestScreens/Tab3'
import Modal1 from './screens/TestScreens/Modal1'
import Modal2 from './screens/TestScreens/Modal2'
import Modal3 from './screens/TestScreens/Modal3'

import Login from './screens/Login'
import Signup from './screens/Signup'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const NoHeader = { headerShown: false }
const RootStackOptions = {
  headerShown: false,
  cardStyle: { backgroundColor: 'rgba(0, 0, 0, 0.4)' },
  cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
}

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={Routes.Tab1} component={Tab1} />
      <Tab.Screen name={Routes.Tab2} component={Tab2} />
      <Tab.Screen name={Routes.Tab3} component={Tab3} />
    </Tab.Navigator>
  )
}

const MainStack = () => {
  const { token, currentUser, isSignout } = useSelector(({ user, ui }) => ({
    token: user.token,
    currentUser: user.currentUser,
    isSignout: ui.isSignout,
  }))
  const isSignedIn = token && !isEmpty(currentUser)

  return (
    <Stack.Navigator>
      {isSignedIn ? (
        <>
          <Stack.Screen name={Routes.Page1} component={Page1} />
          <Stack.Screen name={Routes.Page2} component={Page2} />
          <Stack.Screen
            name={Routes.Page3}
            component={Page3}
            options={({ route }) => ({
              header: (props) => <CustomNavigationHeader {...props} />,
            })}
          />
          <Stack.Screen name={Routes.TabsNav} component={TabNavigator} options={NoHeader} />
        </>
      ) : (
        <>
          <Stack.Screen
            name={Routes.Login}
            component={Login}
            options={{
              ...NoHeader,
              animationTypeForReplace: isSignout ? 'pop' : 'push',
            }}
          />
          <Stack.Screen name={Routes.Signup} component={Signup} options={NoHeader} />
        </>
      )}
    </Stack.Navigator>
  )
}

const RootNavigator = ({ initialState }) => {
  const handleNavigationStateChange = (state) => {
    setItem(NAVIGATION_STATE_KEY, JSON.stringify(state))
  }

  return (
    <NavigationContainer initialState={initialState} onStateChange={handleNavigationStateChange}>
      <Stack.Navigator mode="modal" screenOptions={RootStackOptions}>
        <Stack.Screen name={Routes.MainStack} component={MainStack} />
        <Stack.Screen name={Routes.Modal1} component={Modal1} />
        <Stack.Screen name={Routes.Modal2} component={Modal2} />
        <Stack.Screen name={Routes.Modal3} component={Modal3} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
