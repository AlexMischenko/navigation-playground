import React, { useState, useEffect } from 'react'
import { Provider } from 'react-redux'
import type { InitialState } from '@react-navigation/native'

import store from './src/redux/store'
import RootNavigator from './src/navigator'
import SplashScreen from './src/screens/SplashScreen'
import LoadingContainer from './src/LoadingContainer'
import LoadingSpinner from './src/components/LoadingSpinner'
import autoload from './src/utils/autoload'

const App: React.FC = () => {
  const [isReady, setIsReady] = useState(false)
  const [initialNavigationState, setInitialNavigationState] = useState<InitialState>()

  useEffect(() => {
    autoload()
      .then(({ navigationState }) => {
        if (navigationState) {
          setInitialNavigationState(navigationState)
        }
      })
      .finally(() => {
        setIsReady(true)
      })
  }, [])

  if (!isReady) {
    return <SplashScreen />
  }

  return (
    <Provider store={store}>
      <LoadingContainer>
        <RootNavigator initialState={initialNavigationState} />
      </LoadingContainer>
      <LoadingSpinner />
    </Provider>
  )
}

export default App
