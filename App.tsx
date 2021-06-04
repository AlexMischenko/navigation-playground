import React, { useState, useEffect } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import type { InitialState } from '@react-navigation/native'

import { store, persistor } from './src/redux/store'
import RootNavigator from './src/navigator'
import SplashScreen from './src/screens/SplashScreen'
import LoadingContainer from './src/LoadingContainer'
import autoload from './src/utils/autoload'

const App: React.FC<Record<string, never>> = () => {
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
      <PersistGate loading={null} persistor={persistor}>
        <LoadingContainer>
          <RootNavigator initialState={initialNavigationState} />
        </LoadingContainer>
      </PersistGate>
    </Provider>
  )
}

export default App
