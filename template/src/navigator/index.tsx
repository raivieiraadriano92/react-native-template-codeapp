import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { enableScreens } from 'react-native-screens'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { useTheme } from 'styled-components/native'

import { Home, MakeSomething } from 'src/components/pages'
import { styles as TextStyles } from 'src/components/atoms/text'

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
          headerLargeTitleStyle: {
            ...TextStyles.h2
          },
          headerStyle: {
            backgroundColor: theme.colors.systemBackgroundPrimary
          },
          headerTintColor: theme.colors.text,
          headerTitleStyle: { ...TextStyles.subtitle1 },
          stackAnimation: 'slide_from_right'
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MakeSomething" component={MakeSomething} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
