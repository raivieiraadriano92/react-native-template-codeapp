import React, { PropsWithChildren } from 'react'
import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native'
import { DefaultTheme, useTheme } from 'styled-components/native'

type Props = PropsWithChildren<
  Pick<ViewProps, 'style'> &
    Pick<
      ViewStyle,
      'alignItems' | 'flexDirection' | 'flexWrap' | 'justifyContent'
    > &
    Partial<
      Record<
        keyof Pick<
          ViewStyle,
          | 'margin'
          | 'marginBottom'
          | 'marginEnd'
          | 'marginHorizontal'
          | 'marginLeft'
          | 'marginRight'
          | 'marginStart'
          | 'marginTop'
          | 'marginVertical'
          | 'padding'
          | 'paddingBottom'
          | 'paddingEnd'
          | 'paddingHorizontal'
          | 'paddingLeft'
          | 'paddingRight'
          | 'paddingStart'
          | 'paddingTop'
          | 'paddingVertical'
        >,
        keyof DefaultTheme['spacing']
      >
    > & {
      flex?: boolean
    }
>

export default function ({
  children,
  flex = false,
  margin,
  marginBottom,
  marginEnd,
  marginHorizontal,
  marginLeft,
  marginRight,
  marginStart,
  marginTop,
  marginVertical,
  padding,
  paddingBottom,
  paddingEnd,
  paddingHorizontal,
  paddingLeft,
  paddingRight,
  paddingStart,
  paddingTop,
  paddingVertical,
  style,
  ...props
}: Props): JSX.Element {
  const theme = useTheme()

  return (
    <View
      style={StyleSheet.compose(
        {
          ...(flex ? { flex: 1 } : {}),
          ...(margin ? { margin: theme.spacing[margin] } : {}),
          ...(marginBottom
            ? { marginBottom: theme.spacing[marginBottom] }
            : {}),
          ...(marginEnd ? { marginEnd: theme.spacing[marginEnd] } : {}),
          ...(marginHorizontal
            ? { marginHorizontal: theme.spacing[marginHorizontal] }
            : {}),
          ...(marginLeft ? { marginLeft: theme.spacing[marginLeft] } : {}),
          ...(marginRight ? { marginRight: theme.spacing[marginRight] } : {}),
          ...(marginStart ? { marginStart: theme.spacing[marginStart] } : {}),
          ...(marginTop ? { marginTop: theme.spacing[marginTop] } : {}),
          ...(marginVertical
            ? { marginVertical: theme.spacing[marginVertical] }
            : {}),
          ...(padding ? { padding: theme.spacing[padding] } : {}),
          ...(paddingBottom
            ? { paddingBottom: theme.spacing[paddingBottom] }
            : {}),
          ...(paddingEnd ? { paddingEnd: theme.spacing[paddingEnd] } : {}),
          ...(paddingHorizontal
            ? { paddingHorizontal: theme.spacing[paddingHorizontal] }
            : {}),
          ...(paddingLeft ? { paddingLeft: theme.spacing[paddingLeft] } : {}),
          ...(paddingRight
            ? { paddingRight: theme.spacing[paddingRight] }
            : {}),
          ...(paddingStart
            ? { paddingStart: theme.spacing[paddingStart] }
            : {}),
          ...(paddingTop ? { paddingTop: theme.spacing[paddingTop] } : {}),
          ...(paddingVertical
            ? { paddingVertical: theme.spacing[paddingVertical] }
            : {}),
          ...props
        },
        style
      )}
    >
      {children}
    </View>
  )
}
