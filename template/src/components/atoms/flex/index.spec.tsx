import React from 'react'
import { Text } from 'react-native'
import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import normalize from 'react-native-normalize'

import DefaultTheme from 'src/theme'

import Flex from './index'

describe('atoms/flex', () => {
  it('should be able render children', () => {
    const { findByText } = render(
      <ThemeProvider theme={DefaultTheme}>
        <Flex>
          <Text>test</Text>
        </Flex>
      </ThemeProvider>
    )

    expect(findByText('test')).toBeTruthy()
  })

  it('should have right styles', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={DefaultTheme}>
        <Flex
          flex
          margin="medium"
          marginBottom="medium"
          marginHorizontal="medium"
          marginLeft="medium"
          marginRight="medium"
          marginTop="medium"
          marginVertical="medium"
          padding="medium"
          paddingBottom="medium"
          paddingHorizontal="medium"
          paddingLeft="medium"
          paddingRight="medium"
          paddingTop="medium"
          paddingVertical="medium"
        />
      </ThemeProvider>
    )

    const component = getByTestId('container')

    expect(component.props.style).toMatchObject({
      flex: 1,
      margin: normalize(DefaultTheme.spacing.medium),
      marginBottom: normalize(DefaultTheme.spacing.medium),
      marginHorizontal: normalize(DefaultTheme.spacing.medium),
      marginLeft: normalize(DefaultTheme.spacing.medium),
      marginRight: normalize(DefaultTheme.spacing.medium),
      marginTop: normalize(DefaultTheme.spacing.medium),
      marginVertical: normalize(DefaultTheme.spacing.medium),
      padding: normalize(DefaultTheme.spacing.medium),
      paddingBottom: normalize(DefaultTheme.spacing.medium),
      paddingHorizontal: normalize(DefaultTheme.spacing.medium),
      paddingLeft: normalize(DefaultTheme.spacing.medium),
      paddingRight: normalize(DefaultTheme.spacing.medium),
      paddingTop: normalize(DefaultTheme.spacing.medium),
      paddingVertical: normalize(DefaultTheme.spacing.medium)
    })
  })

  it('should have right merged styles', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={DefaultTheme}>
        <Flex flex style={{ backgroundColor: DefaultTheme.colors.primary }} />
      </ThemeProvider>
    )

    const component = getByTestId('container')

    expect({
      ...component.props.style[0],
      ...component.props.style[1]
    }).toMatchObject({
      flex: 1,
      backgroundColor: DefaultTheme.colors.primary
    })
  })
})
