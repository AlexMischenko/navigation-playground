export const loginUser = (data) => {
  // TODO: Should be replaced with real API call
  return new Promise((resolve, reject) => {
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

export const signUpUser = (data) => {
  // TODO: Should be replaced with real API call
  return new Promise((resolve, reject) => {
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

export const logoutUser = () => {
  // TODO: Should be replaced with real API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, 500)
  })
}

export const getUser = (alwaysApproved = true) => {
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
