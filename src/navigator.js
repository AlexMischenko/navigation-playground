import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import CustomNavigationHeader from './components/CustomNavigationHeader'

import Routes from './pages'
import Page1 from './screens/TestScreens/Page1'
import Page2 from './screens/TestScreens/Page2'
import Page3 from './screens/TestScreens/Page3'
import Tab1 from './screens/TestScreens/Tab1'
import Tab2 from './screens/TestScreens/Tab2'

import Login from './screens/Login'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={Routes.Tab1} component={Tab1} />
      <Tab.Screen name={Routes.Tab2} component={Tab2} />
    </Tab.Navigator>
  )
}

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Routes.Page1} component={Page1} />
        <Stack.Screen name={Routes.Page2} component={Page2} />
        <Stack.Screen
          name={Routes.Page3}
          component={Page3}
          options={({ route }) => ({
            header: (props) => <CustomNavigationHeader {...props} />,
          })}
        />
        <Stack.Screen name={Routes.Login} component={Login} options={{ headerShown: false }} />
        <Stack.Screen
          name={Routes.TabsNav}
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
