import type {
  ILoginUserPayload,
  ILoginUserResponse,
  ISignUpUserPayload,
  ISignUpUserResponse,
  IGetUserResponse,
} from '../types'

export const loginUser = (data: ILoginUserPayload): Promise<ILoginUserResponse> => {
  // TODO: Should be replaced with real API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: {
          id: 1,
          username: data.username,
          email: 'test1@gmail.com',
        },
        token: 'AIzaSyCK0g8FmYmKqJdPfbP4iwB93rIIX5rLEBY',
      })
    }, 500)
  })
}

export const signUpUser = (data: ISignUpUserPayload): Promise<ISignUpUserResponse> => {
  // TODO: Should be replaced with real API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: {
          id: 1,
          username: data.username,
          email: data.email,
        },
      })
    }, 500)
  })
}

export const logoutUser = (): Promise<boolean> => {
  // TODO: Should be replaced with real API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 500)
  })
}

export const getUser = (alwaysApproved = true): Promise<IGetUserResponse> => {
  // TODO: Should be replaced with real API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (alwaysApproved) {
        resolve({
          user: {
            id: 1,
            username: 'test1',
            email: 'test1@gmail.com',
          },
          token: 'AIzaSyCK0g8FmYmKqJdPfbP4iwB93rIIX5rLEBY',
        })
      } else {
        reject(new Error('Not Authorized'))
      }
    }, 500)
  })
}
