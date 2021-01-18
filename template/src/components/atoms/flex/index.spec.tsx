import React from 'react'
import { Text } from 'react-native'
import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import normalize from 'react-native-normalize'

import DefaultTheme from 'src/theme'

import Flex from './index'

describe('atoms / Flex', () => {
  it('should be able to render correctly', () => {
    const { findByText, getByTestId, toJSON } = render(
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
          style={{ backgroundColor: DefaultTheme.colors.primary }}
        >
          <Text>test</Text>
        </Flex>
      </ThemeProvider>
    )

    const json = toJSON()

    const component = getByTestId('container')

    expect(json).toMatchSnapshot()

    expect(findByText('test')).toBeTruthy()

    expect({
      ...component.props.style[0],
      ...component.props.style[1]
    }).toMatchObject({
      backgroundColor: DefaultTheme.colors.primary,
      flex: 1,
      margin: normalize(DefaultTheme.spacing.medium),
      marginBottom: normalize(DefaultTheme.spacing.medium, 'height'),
      marginHorizontal: normalize(DefaultTheme.spacing.medium),
      marginLeft: normalize(DefaultTheme.spacing.medium),
      marginRight: normalize(DefaultTheme.spacing.medium),
      marginTop: normalize(DefaultTheme.spacing.medium, 'height'),
      marginVertical: normalize(DefaultTheme.spacing.medium, 'height'),
      padding: normalize(DefaultTheme.spacing.medium),
      paddingBottom: normalize(DefaultTheme.spacing.medium, 'height'),
      paddingHorizontal: normalize(DefaultTheme.spacing.medium),
      paddingLeft: normalize(DefaultTheme.spacing.medium),
      paddingRight: normalize(DefaultTheme.spacing.medium),
      paddingTop: normalize(DefaultTheme.spacing.medium, 'height'),
      paddingVertical: normalize(DefaultTheme.spacing.medium, 'height')
    })
  })

  it('should be able to render without props', () => {
    const { findByText, toJSON } = render(
      <ThemeProvider theme={DefaultTheme}>
        <Flex />
      </ThemeProvider>
    )

    const json = toJSON()

    expect(json).toMatchSnapshot()

    expect(findByText('test')).toBeTruthy()
  })
})
