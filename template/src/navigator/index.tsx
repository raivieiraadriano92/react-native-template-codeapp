import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { enableScreens } from 'react-native-screens'
import { useTheme } from 'styled-components/native'

import { Home } from 'src/components/pages'

export type RootStackNavigator = {
  Home: undefined
}

enableScreens()

const Stack = createStackNavigator()

export default function (): JSX.Element {
  const theme = useTheme()

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyle: { backgroundColor: theme.colors.systemBackgroundPrimary }
        }}
      >
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
