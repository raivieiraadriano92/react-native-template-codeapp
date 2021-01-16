import React, { useCallback, useMemo } from 'react'
import {
  Pressable,
  PressableProps,
  PressableStateCallbackType
} from 'react-native'
import { DefaultTheme, useTheme } from 'styled-components/native'
import normalize from 'react-native-normalize'
import Color from 'color'

import { Flex, Text } from 'src/components/atoms'
import { hexToRgba } from 'src/utils'

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
        borderWidth: 1,
        paddingHorizontal: theme.spacing.small
      }

      if (size === 'default') {
        _style.borderRadius = normalize(14)
        _style.height = normalize(48, 'height')
      } else if (size === 'small') {
        _style.borderRadius = normalize(8)
        _style.height = normalize(32, 'height')
      }

      if (type === 'primary') {
        if (disabled) {
          _style.backgroundColor = theme.colors.systemBackgroundSecondary
          _style.borderColor = theme.colors.systemBackgroundSecondary
        } else if (pressed) {
          _style.backgroundColor = Color(theme.colors.primary)
            .darken(0.1)
            .toString()
          _style.borderColor = Color(theme.colors.primary)
            .darken(0.1)
            .toString()
        } else {
          _style.backgroundColor = theme.colors.primary
          _style.borderColor = theme.colors.primary
        }
      } else if (type === 'secondary') {
        _style.borderColor = theme.colors.primary

        if (disabled) {
          _style.backgroundColor = theme.colors.systemBackgroundSecondary
          _style.borderColor = Color(theme.colors.systemBackgroundSecondary)
            .darken(0.2)
            .toString()
        } else if (pressed) {
          _style.backgroundColor = hexToRgba(theme.colors.primary, 0.2)
        } else {
          _style.backgroundColor = theme.colors.systemBackgroundPrimary
        }
      } else if (type === 'tertiary') {
        if (pressed) {
          _style.backgroundColor = hexToRgba(theme.colors.primary, 0.2)
          _style.borderColor = theme.colors.transparent
        } else {
          _style.backgroundColor = theme.colors.transparent
          _style.borderColor = theme.colors.transparent
        }
      }

      return _style
    },
    [disabled, size, theme.colors, type]
  )

  const textColor = useMemo(() => {
    let alpha = 1
    let color: keyof DefaultTheme['colors'] = 'primary'

    if (type === 'primary' && !disabled) {
      color = 'white'
    } else if (disabled) {
      alpha = 0.2
      color = 'text'
    }

    return {
      alpha,
      color
    }
  }, [disabled, type])

  return (
    <Pressable {...{ disabled, style, ...props }}>
      <Flex alignItems="center" flex justifyContent="center">
        <Text alpha={textColor.alpha} color={textColor.color} type="body1">
          {title}
        </Text>
      </Flex>
    </Pressable>
  )
}
