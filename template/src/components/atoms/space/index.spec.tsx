import React from 'react'
import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import normalize from 'react-native-normalize'

import DefaultTheme from 'src/theme'

import Space from './index'

describe('atoms / Space', () => {
  it('should be able to render correctly', () => {
    const { findByText, getByTestId, toJSON } = render(
      <ThemeProvider theme={DefaultTheme}>
        <Space />
      </ThemeProvider>
    )

    const json = toJSON()

    const component = getByTestId('container')

    expect(json).toMatchSnapshot()

    expect(findByText('test')).toBeTruthy()

    expect(component.props.style).toMatchObject({
      height: normalize(DefaultTheme.spacing.medium, 'height'),
      width: '100%'
    })
  })

  it('should be able to render correctly with other props', () => {
    const { findByText, getByTestId, toJSON } = render(
      <ThemeProvider theme={DefaultTheme}>
        <Space size="small" type="vertical" />
      </ThemeProvider>
    )

    const json = toJSON()

    const component = getByTestId('container')

    expect(json).toMatchSnapshot()

    expect(findByText('test')).toBeTruthy()

    expect(component.props.style).toMatchObject({
      height: '100%',
      width: normalize(DefaultTheme.spacing.small)
    })
  })
})
