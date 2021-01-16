import React, { useEffect } from 'react'
import { ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { RootStackNavigator } from 'src/navigator'

export default function (): JSX.Element {
  const navigation = useNavigation<StackNavigationProp<RootStackNavigator>>()

  useEffect(() => {
    navigation.setOptions({
      title: 'Make something'
    })
  }, [navigation])

  return <ScrollView />
}
