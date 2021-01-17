import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { enableScreens } from 'react-native-screens'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { useTheme } from 'styled-components/native'

import { Home, MakeSomething } from 'src/components/pages'

export type RootStackNavigator = {
  Home: undefined
  MakeSomething: undefined
}

enableScreens()

const Stack = createNativeStackNavigator()

export default function (): JSX.Element {
  const theme = useTheme()

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: {
            backgroundColor: theme.colors.systemBackgroundPrimary
          },
          headerHideShadow: true,
          headerLargeTitle: true,
          headerStyle: {
            backgroundColor: theme.colors.systemBackgroundPrimary
          },
          headerTintColor: theme.colors.text,
          stackAnimation: 'slide_from_right'
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MakeSomething" component={MakeSomething} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
