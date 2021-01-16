import 'react-native-gesture-handler'

import React from 'react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import CodePush from 'react-native-code-push'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import GeneralProvider, { useGeneralContext } from './contexts/general'
import Navigator from './navigator'
import DefaultTheme, { darkColors } from './theme'

function Wrap(): JSX.Element {
  const generalContext = useGeneralContext()

  const theme = {
    ...DefaultTheme,
    ...(generalContext.darkMode ? { colors: darkColors } : {})
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider
        {...{
          theme
        }}
      >
        <StatusBar
          animated
          backgroundColor={theme.colors.transparent}
          barStyle={generalContext.darkMode ? 'light-content' : 'dark-content'}
          translucent
        />
        <Navigator />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

function App(): JSX.Element {
  return (
    <GeneralProvider>
      <Wrap />
    </GeneralProvider>
  )
}

export default CodePush(App)
