import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Routes from './pages'
import Page1 from './screens/TestScreens/Page1'
import Page2 from './screens/TestScreens/Page2'
import Page3 from './screens/TestScreens/Page3'

const Stack = createStackNavigator()

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Routes.Page1} component={Page1} />
        <Stack.Screen name={Routes.Page2} component={Page2} />
        <Stack.Screen name={Routes.Page3} component={Page3} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
