import type { ILoginUserResponse, ISignUpUserResponse, IGetUserResponse } from '@types'

export const mockUserResponse: ILoginUserResponse | IGetUserResponse = {
  user: { id: 1234, username: 'mock', email: 'mock@.test,com' },
  token: 'someTestToken',
}

export const mockUserRegisterResponse: ISignUpUserResponse = {
  user: { id: 1234, username: 'mock', email: 'mock@.test,com' },
}

export const mockSignUpNavigationState = {
  type: 'stack',
  index: 0,
  routeNames: ['MainStack'],
  routes: [
    {
      name: 'MainStack',
      state: {
        type: 'stack',
        index: 0,
        routeNames: ['SignUp'],
        routes: [{ name: 'SignUp' }],
      },
    },
  ],
}
