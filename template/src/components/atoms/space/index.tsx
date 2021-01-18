import React from 'react'
import { View } from 'react-native'
import { DefaultTheme, useTheme } from 'styled-components/native'
import normalize from 'react-native-normalize'

type Props = {
  size?: keyof DefaultTheme['spacing']
  type?: 'horizontal' | 'vertical'
}

export default function ({
  size = 'medium',
  type = 'horizontal'
}: Props): JSX.Element {
  const theme = useTheme()

  return (
    <View
      style={{
        height:
          type === 'horizontal'
            ? normalize(theme.spacing[size], 'height')
            : '100%',
        width: type === 'horizontal' ? '100%' : normalize(theme.spacing[size])
      }}
      testID="container"
    />
  )
}
