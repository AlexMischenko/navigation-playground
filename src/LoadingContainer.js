import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { refreshUser } from './services/user'
import NoInternetIndicator from './components/NoInternetIndicator'

const LoadingContainer = ({ children }) => {
  const [isNetworkError] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    refreshUser()(dispatch)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {children}
      {isNetworkError && <NoInternetIndicator />}
    </>
  )
}

export default LoadingContainer
