import React, { PropsWithChildren } from 'react'
import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native'
import { DefaultTheme, useTheme } from 'styled-components/native'
import normalize from 'react-native-normalize'

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
          | 'marginHorizontal'
          | 'marginLeft'
          | 'marginRight'
          | 'marginTop'
          | 'marginVertical'
          | 'padding'
          | 'paddingBottom'
          | 'paddingHorizontal'
          | 'paddingLeft'
          | 'paddingRight'
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
  marginHorizontal,
  marginLeft,
  marginRight,
  marginTop,
  marginVertical,
  padding,
  paddingBottom,
  paddingHorizontal,
  paddingLeft,
  paddingRight,
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
          ...(margin ? { margin: normalize(theme.spacing[margin]) } : {}),
          ...(marginBottom
            ? { marginBottom: normalize(theme.spacing[marginBottom], 'height') }
            : {}),
          ...(marginHorizontal
            ? { marginHorizontal: normalize(theme.spacing[marginHorizontal]) }
            : {}),
          ...(marginLeft
            ? { marginLeft: normalize(theme.spacing[marginLeft]) }
            : {}),
          ...(marginRight
            ? { marginRight: normalize(theme.spacing[marginRight]) }
            : {}),
          ...(marginTop
            ? { marginTop: normalize(theme.spacing[marginTop], 'height') }
            : {}),
          ...(marginVertical
            ? {
                marginVertical: normalize(
                  theme.spacing[marginVertical],
                  'height'
                )
              }
            : {}),
          ...(padding ? { padding: normalize(theme.spacing[padding]) } : {}),
          ...(paddingBottom
            ? {
                paddingBottom: normalize(theme.spacing[paddingBottom], 'height')
              }
            : {}),
          ...(paddingHorizontal
            ? { paddingHorizontal: normalize(theme.spacing[paddingHorizontal]) }
            : {}),
          ...(paddingLeft
            ? { paddingLeft: normalize(theme.spacing[paddingLeft]) }
            : {}),
          ...(paddingRight
            ? { paddingRight: normalize(theme.spacing[paddingRight]) }
            : {}),
          ...(paddingTop
            ? { paddingTop: normalize(theme.spacing[paddingTop], 'height') }
            : {}),
          ...(paddingVertical
            ? {
                paddingVertical: normalize(
                  theme.spacing[paddingVertical],
                  'height'
                )
              }
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
