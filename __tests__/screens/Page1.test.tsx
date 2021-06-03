import * as React from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { render } from '@testing-library/react-native'

import Page1 from '@screens/TestScreens/Page1'
import store from '@redux/store'

describe('Testing `Page1` test screen', () => {
  test('Page1 has "Go to Page2" button', () => {
    const component = (
      <Provider store={store}>
        <NavigationContainer>
          <Page1 />
        </NavigationContainer>
      </Provider>
    )
    const { getByText } = render(component)
    const page2Button = getByText('Go to Page2')

    expect(page2Button).toBeTruthy()
  })
})
