import _ from 'lodash'
import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import NetInfo from '@react-native-community/netinfo'

import { useDispatch } from '@hooks'
import { refreshUser } from '@services/user'
import { engine } from '@utils/request'
import { withThemeContext } from '@components/HOC/ThemeContext'
import NoInternetIndicator from '@components/NoInternetIndicator'
import LoadingSpinner from '@components/LoadingSpinner'

const LoadingContainer: React.FC<Record<string, unknown>> = ({ children }) => {
  const [isNetworkError, setIsNetworkError] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    refreshUser()(dispatch)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const unsubscribeNetworkChanges = NetInfo.addEventListener((state) => {
      setIsNetworkError(!state.isConnected)
    })

    engine.interceptors.response.use(
      (response) => {
        setIsNetworkError(false)
        return response
      },
      (e) => {
        const errorStatus = parseInt(_.get(e, 'response.status'))

        if (e.request._timedOut) {
          throw e
        }

        if (e.message === 'Network Error' || e.response === undefined) {
          throw e
        }

        if (errorStatus >= 500) {
          // TODO: sentry logs
          console.error(
            `\u001b[31m\n\nServer Error: ${e.message} \n ${JSON.stringify(
              e.response.data,
              null,
              2
            )}`
          )
          throw e
        }

        // Token expired
        const code = _.get(e, 'response.data.code')
        if (errorStatus === 401 && code === 130) {
          // TO DO: implement token refreshing
          // refreshTokenAction().catch((e) => {
          //   console.log(e)
          // })
          // TODO: retry request after refresh
        }

        if (errorStatus === 422) {
          const errors = JSON.stringify(_.get(e, 'response.data.data'))
          Alert.alert(errors)
        }

        throw e
      }
    )

    return () => {
      unsubscribeNetworkChanges()
    }
  }, [])

  return (
    <>
      {children}
      {isNetworkError && <NoInternetIndicator />}
      <LoadingSpinner />
    </>
  )
}

export default withThemeContext(LoadingContainer)
