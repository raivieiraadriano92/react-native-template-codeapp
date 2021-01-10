import React, { PropsWithChildren, useMemo } from 'react'
import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native'
import { useTheme } from 'styled-components/native'

type Props = PropsWithChildren<
  Pick<ViewProps, 'style'> &
    Pick<
      ViewStyle,
      | 'alignItems'
      | 'flexDirection'
      | 'flexWrap'
      | 'justifyContent'
      | 'padding'
      | 'paddingBottom'
      | 'paddingEnd'
      | 'paddingHorizontal'
      | 'paddingLeft'
      | 'paddingRight'
      | 'paddingStart'
      | 'paddingTop'
      | 'paddingVertical'
    > & {
      flex?: boolean
    }
>

export default function ({
  children,
  flex = false,
  style,
  ...props
}: Props): JSX.Element {
  const theme = useTheme()

  return (
    <View
      style={StyleSheet.compose(
        {
          ...(flex ? { flex: 1 } : {}),
          ...props
        },
        style
      )}
    >
      {children}
    </View>
  )
}
