import * as React from 'react'
import { render, fireEvent } from '@testing-library/react-native'

import StyledInput from '../../src/components/StyledInput'

describe('Testing @components/StyledInput', () => {
  test('`StyledInput` has title displayed when "title" prop set', () => {
    const component = <StyledInput title="TestTitle" onChangeText={jest.fn()} />
    const { getByText } = render(component)
    const titleText = getByText('TestTitle')

    expect(titleText).toBeTruthy()
  })

  test('`StyledInput` passes numbers in "onChangeText" when "numbersOnly" prop enabled', () => {
    const onChangeTextMock = jest.fn()
    const component = <StyledInput placeholder="ph" onChangeText={onChangeTextMock} numbersOnly />
    const { getByPlaceholderText } = render(component)
    const textInput = getByPlaceholderText('ph')

    fireEvent.changeText(textInput, '1234')

    expect(onChangeTextMock).toHaveBeenCalledWith(1234)
  })

  test('`StyledInput` doesn`t call "onChangeText" when value doesn`t match "validationRegEx"', () => {
    const onChangeTextMock = jest.fn()
    const component = (
      <StyledInput placeholder="ph" onChangeText={onChangeTextMock} validationRegEx={/^[a-z]*$/} />
    )
    const { getByPlaceholderText } = render(component)
    const textInput = getByPlaceholderText('ph')

    fireEvent.changeText(textInput, 'QWERTY')

    expect(onChangeTextMock).not.toHaveBeenCalledWith('QWERTY')
  })

  test('`StyledInput` displays error state when "error" prop enabled', () => {
    const onChangeTextMock = jest.fn()
    const component = <StyledInput onChangeText={onChangeTextMock} error />
    const wrapper = render(component)

    expect(wrapper).toMatchSnapshot()
  })
})
