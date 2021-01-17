import React, { PropsWithChildren } from 'react'
import { ScrollView, ScrollViewProps } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import normalize from 'react-native-normalize'

import { Flex } from 'src/components/atoms'

type Props = ScrollViewProps &
  PropsWithChildren<{
    colors: Partial<Record<'bottom' | 'top', string[]>>
    disableBottomInset?: boolean
    disableTopInset?: boolean
  }>

export default function ({
  children,
  colors,
  disableBottomInset = false,
  disableTopInset = false,
  ...props
}: Props): JSX.Element {
  const insets = useSafeAreaInsets()

  const heightBottom = normalize(48 + (disableBottomInset ? 0 : insets.bottom))
  const heightTop = normalize(48 + (disableTopInset ? 0 : insets.top))

  return (
    <Flex flex>
      <ScrollView {...props}>
        <Flex style={{ height: heightTop }} />
        {children}
        <Flex style={{ height: heightBottom }} />
      </ScrollView>
      {!!colors.top && (
        <LinearGradient
          colors={colors.top}
          style={{
            height: heightTop,
            position: 'absolute',
            top: 0,
            width: '100%'
          }}
        />
      )}
      {!!colors.bottom && (
        <LinearGradient
          colors={colors.bottom}
          style={{
            bottom: 0,
            height: heightBottom,
            position: 'absolute',
            width: '100%'
          }}
        />
      )}
    </Flex>
  )
}
