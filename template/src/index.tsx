import 'react-native-gesture-handler'

import React from 'react'
import { ThemeProvider } from 'styled-components/native'

import Navigator from './navigator'
import theme from './theme'

export default function () {
  return (
    <ThemeProvider theme={theme}>
      <Navigator />
    </ThemeProvider>
  )
}
