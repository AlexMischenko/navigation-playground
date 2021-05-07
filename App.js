import React from 'react'
import { Provider } from 'react-redux'

import store from './src/redux/store'
import RootNavigator from './src/navigator'
import LoadingSpinner from './src/components/LoadingSpinner'

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
      {/** TODO: Move `LoadingSpinner` and `NoInternet` to `LoadingContainer` */}
      <LoadingSpinner />
    </Provider>
  )
}

export default App
