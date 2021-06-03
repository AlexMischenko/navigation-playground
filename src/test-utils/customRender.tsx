import React from 'react'
import { render, RenderOptions, RenderAPI } from '@testing-library/react-native'
import { Provider } from 'react-redux'

import store from '../redux/store'

export const ProvidersWrapper: React.FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
): RenderAPI => render(ui, { wrapper: ProvidersWrapper, ...options })

export default customRender
