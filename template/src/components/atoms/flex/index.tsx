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
          ...(margin ? { margin: normalize(theme.spacing[margin]) } : {}),
          ...(marginBottom
            ? { marginBottom: normalize(theme.spacing[marginBottom]) }
            : {}),
          ...(marginEnd
            ? { marginEnd: normalize(theme.spacing[marginEnd]) }
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
          ...(marginStart
            ? { marginStart: normalize(theme.spacing[marginStart]) }
            : {}),
          ...(marginTop
            ? { marginTop: normalize(theme.spacing[marginTop]) }
            : {}),
          ...(marginVertical
            ? { marginVertical: normalize(theme.spacing[marginVertical]) }
            : {}),
          ...(padding ? { padding: normalize(theme.spacing[padding]) } : {}),
          ...(paddingBottom
            ? { paddingBottom: normalize(theme.spacing[paddingBottom]) }
            : {}),
          ...(paddingEnd
            ? { paddingEnd: normalize(theme.spacing[paddingEnd]) }
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
          ...(paddingStart
            ? { paddingStart: normalize(theme.spacing[paddingStart]) }
            : {}),
          ...(paddingTop
            ? { paddingTop: normalize(theme.spacing[paddingTop]) }
            : {}),
          ...(paddingVertical
            ? { paddingVertical: normalize(theme.spacing[paddingVertical]) }
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
