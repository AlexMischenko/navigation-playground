import * as React from 'react'
import { fireEvent, act } from '@testing-library/react-native'

import Login from '@screens/Login'
import { mockUserResponse } from '../../src/test-utils/mocks'
import RootNavigator from '../../src/navigator'
import customRender from '../../src/test-utils/customRender'

const nav: any = {}

jest.mock('@api/user', () => ({
  loginUser: jest.fn(() => Promise.resolve(mockUserResponse)),
  getUser: jest.fn(() => Promise.resolve(mockUserResponse)),
}))

describe('Testing @screens/Login', () => {
  it('`Login` screen renders correctly', () => {
    const wrapper = customRender(<Login navigation={nav} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('`Login` screen has "username" input', () => {
    const { getByText } = customRender(<Login navigation={nav} />)
    const usernameInputTitle = getByText('username')

    expect(usernameInputTitle).toBeTruthy()
  })

  it('`Login` screen has "password" input', () => {
    const { getByText } = customRender(<Login navigation={nav} />)
    const passwordInputTitle = getByText('password')

    expect(passwordInputTitle).toBeTruthy()
  })

  it('`Login` screen has submit button', () => {
    const { getByText } = customRender(<Login navigation={nav} />)
    const submitButton = getByText('Log In')

    expect(submitButton).toBeTruthy()
  })

  it('`Login` screen navigates to `SignUp` screen correctly', async () => {
    const { getByText } = customRender(<RootNavigator />)
    const goToSignUpButton = getByText('Sign Up')

    fireEvent.press(goToSignUpButton)

    const registerText = getByText('Register')

    expect(registerText).toBeTruthy()
  })

  it('`Login` screen navigates to `Home` screen after form submit correctly', async () => {
    const { getByText, getByA11yLabel } = customRender(<RootNavigator />)
    const usernameInput = getByA11yLabel('username input')
    const passwordInput = getByA11yLabel('password input')
    const submitButton = getByText('Log In')

    fireEvent.changeText(usernameInput, 'test')
    fireEvent.changeText(passwordInput, 'test')
    await act(async () => {
      fireEvent.press(submitButton)
    })

    const homepageText = getByText('Page1')

    expect(homepageText).toBeTruthy()
  })
})
