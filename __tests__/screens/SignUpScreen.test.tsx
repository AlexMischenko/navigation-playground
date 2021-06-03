import * as React from 'react'
import { fireEvent, act } from '@testing-library/react-native'

import SignUp from '@screens/SignUp'
import {
  mockUserResponse,
  mockUserRegisterResponse,
  mockSignUpNavigationState,
} from '../../src/test-utils/mocks'
import RootNavigator from '../../src/navigator'
import customRender from '../../src/test-utils/customRender'

const nav: any = {}

jest.mock('@api/user', () => ({
  signUpUser: jest.fn(() => Promise.resolve(mockUserRegisterResponse)),
  loginUser: jest.fn(() => Promise.resolve(mockUserResponse)),
  getUser: jest.fn(() => Promise.resolve(mockUserResponse)),
}))

describe('Testing @screens/SignUp', () => {
  it('`SignUp` screen renders correctly', () => {
    const wrapper = customRender(<SignUp navigation={nav} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('`SignUp` screen has "username" input', () => {
    const { getByText } = customRender(<SignUp navigation={nav} />)
    const usernameInputTitle = getByText('username')

    expect(usernameInputTitle).toBeTruthy()
  })

  it('`SignUp` screen has "email" input', () => {
    const { getByText } = customRender(<SignUp navigation={nav} />)
    const emailInputTitle = getByText('email')

    expect(emailInputTitle).toBeTruthy()
  })

  it('`SignUp` screen has "password" input', () => {
    const { getByText } = customRender(<SignUp navigation={nav} />)
    const passwordInputTitle = getByText('password')

    expect(passwordInputTitle).toBeTruthy()
  })

  it('`SignUp` screen has submit button', () => {
    const { getByText } = customRender(<SignUp navigation={nav} />)
    const submitButton = getByText('Sign Up')

    expect(submitButton).toBeTruthy()
  })

  it('`SignUp` screen navigates to `Login` screen correctly', async () => {
    const { getByText } = customRender(<RootNavigator initialState={mockSignUpNavigationState} />)
    const goToLoginButton = getByText('Sign In.')

    fireEvent.press(goToLoginButton)

    const loginText = getByText('Login')

    expect(loginText).toBeTruthy()
  })

  it('`SignUp` screen navigates to `Home` screen after form submit correctly', async () => {
    const { getByText, getByA11yLabel } = customRender(
      <RootNavigator initialState={mockSignUpNavigationState} />
    )
    const usernameInput = getByA11yLabel('username input')
    const passwordInput = getByA11yLabel('password input')
    const emailInput = getByA11yLabel('email input')
    const submitButton = getByText('Sign Up')

    fireEvent.changeText(usernameInput, 'test')
    fireEvent.changeText(passwordInput, 'test')
    fireEvent.changeText(emailInput, 'mock@test.com')
    await act(async () => {
      fireEvent.press(submitButton)
    })

    const homepageText = getByText('Page1')

    expect(homepageText).toBeTruthy()
  })
})
