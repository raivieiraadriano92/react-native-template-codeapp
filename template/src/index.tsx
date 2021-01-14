import 'react-native-gesture-handler'

import React from 'react'
import { ThemeProvider } from 'styled-components/native'

import GeneralProvider, { useGeneralContext } from './contexts/general'
import Navigator from './navigator'
import theme, { darkColors } from './theme'

function Wrap(): JSX.Element {
  const generalContext = useGeneralContext()

  return (
    <ThemeProvider
      {...{
        theme: {
          ...theme,
          ...(generalContext.darkMode ? { colors: darkColors } : {})
        }
      }}
    >
      <Navigator />
    </ThemeProvider>
  )
}

export default function (): JSX.Element {
  return (
    <GeneralProvider>
      <Wrap />
    </GeneralProvider>
  )
}
