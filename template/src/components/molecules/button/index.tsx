import React, { useCallback, useMemo } from 'react'
import {
  Pressable,
  PressableProps,
  PressableStateCallbackType
} from 'react-native'
import { DefaultTheme, useTheme } from 'styled-components/native'
import normalize from 'react-native-normalize'

import { Flex, Text } from 'src/components/atoms'

type Type = 'primary' | 'secondary' | 'tertiary'

type Props = PressableProps & {
  size?: 'default' | 'small'
  title: string
  type?: Type
}

export default function ({
  disabled,
  size = 'default',
  title,
  type = 'primary',
  ...props
}: Props): JSX.Element {
  const theme = useTheme()

  const style: PressableProps['style'] = useCallback(
    ({ pressed }: PressableStateCallbackType) => {
      const _style: PressableProps['style'] = {
        borderWidth: 1
      }

      if (size === 'default') {
        _style.borderRadius = normalize(14)
        _style.height = normalize(48, 'height')
      } else if (size === 'small') {
        _style.borderRadius = normalize(8)
        _style.height = normalize(32, 'height')
      }

      if (type === 'primary') {
        _style.borderColor = theme.colors.primary40

        if (disabled) {
          _style.backgroundColor = theme.colors.text20
        } else if (pressed) {
          _style.backgroundColor = theme.colors.primary120
          _style.borderColor = theme.colors.primary120
        } else {
          _style.backgroundColor = theme.colors.primary100
        }
      } else if (type === 'secondary') {
        _style.borderColor = theme.colors.primary100

        if (disabled) {
          _style.backgroundColor = theme.colors.text20
          _style.borderColor = theme.colors.text40
        } else if (pressed) {
          _style.backgroundColor = theme.colors.primary40
        } else {
          _style.backgroundColor = theme.colors.white
        }
      } else if (type === 'tertiary') {
        if (pressed) {
          _style.backgroundColor = theme.colors.primary40
          _style.borderColor = theme.colors.primary40
        } else {
          _style.backgroundColor = theme.colors.transparent
          _style.borderColor = theme.colors.transparent
        }
      }

      return _style
    },
    [disabled, size, theme.colors, type]
  )

  const textColor = useMemo<keyof DefaultTheme['colors']>(() => {
    if (type === 'primary') {
      return 'white'
    }
    if (type === 'secondary' && disabled) {
      return 'white'
    }
    if (type === 'tertiary' && disabled) {
      return 'text40'
    }
    return 'primary100'
  }, [disabled, type])

  return (
    <Pressable {...{ disabled, style, ...props }}>
      <Flex alignItems="center" flex justifyContent="center">
        <Text color={textColor} type="body1">
          {title}
        </Text>
      </Flex>
    </Pressable>
  )
}
