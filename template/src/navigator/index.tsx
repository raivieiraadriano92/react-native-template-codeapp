import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
  createStackNavigator,
  TransitionPresets
} from '@react-navigation/stack'
import { enableScreens } from 'react-native-screens'
import { useTheme } from 'styled-components/native'

import { Header } from 'src/components/organisms'
import { Home, MakeSomething } from 'src/components/pages'

export type RootStackNavigator = {
  Home: undefined
  MakeSomething: undefined
}

enableScreens()

const Stack = createStackNavigator()

export default function (): JSX.Element {
  const theme = useTheme()

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="screen"
        screenOptions={{
          cardStyle: { backgroundColor: theme.colors.systemBackgroundPrimary },
          ...TransitionPresets.SlideFromRightIOS,
          header: headerProps => {
            return (
              <Header
                {...(headerProps.navigation.canGoBack()
                  ? { goBack: headerProps.navigation.goBack }
                  : {})}
                right={
                  headerProps.scene.descriptor.options.headerRight &&
                  headerProps.scene.descriptor.options.headerRight({})
                }
                title={headerProps.scene.descriptor.options.title}
              />
            )
          }
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MakeSomething" component={MakeSomething} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
