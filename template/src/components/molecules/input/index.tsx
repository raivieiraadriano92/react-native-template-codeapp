import React, { ReactNode, useMemo, useState } from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { DefaultTheme, useTheme } from 'styled-components/native'
import normalize from 'react-native-normalize'

import { Flex, Icon, Space, Text } from 'src/components/atoms'
import {
  Props as TextProps,
  styles as TextStyles
} from 'src/components/atoms/text'
import { hexToRgba } from 'src/utils'

type LabelProps = Required<Pick<TextProps, 'alpha' | 'color'>>

interface LeftRight {
  ({ color }: LabelProps): ReactNode
}

type Props = TextInputProps & {
  label: string
  left?: LeftRight
  right?: LeftRight
  status?: 'error' | 'success'
  statusMessage?: string
}

const iconSize = normalize(24)
const inputHeight = normalize(41, 'height')

export default function ({
  autoFocus = false,
  editable = true,
  label,
  left,
  onBlur,
  onFocus,
  right,
  status,
  statusMessage,
  value,
  ...props
}: Props): JSX.Element {
  const [focused, setFocused] = useState(autoFocus)

  const theme = useTheme()

  const statusColor = useMemo<keyof DefaultTheme['colors']>(
    () => (status === 'error' ? 'error' : 'success'),
    [status]
  )

  const style = useMemo<TextInputProps['style']>(() => {
    const _style: TextInputProps['style'] = {
      borderColor: theme.colors.systemBackgroundPrimary,
      borderRadius: normalize(12),
      borderWidth: 1,
      color: theme.colors.text,
      height: inputHeight,
      paddingLeft:
        normalize(theme.spacing.small) +
        (left ? iconSize + theme.spacing.tiny : 0),
      paddingRight:
        normalize(theme.spacing.small) +
        (right || status ? iconSize + theme.spacing.tiny : 0),
      ...TextStyles.body2
    }

    if ((!editable || value) && !focused) {
      _style.backgroundColor = theme.colors.systemBackgroundPrimary
      _style.borderColor = theme.colors.systemLine
    } else {
      _style.backgroundColor = theme.colors.systemBackgroundSecondary
    }

    if (focused) {
      _style.borderColor = theme.colors.primary
    } else if (status) {
      _style.borderColor = theme.colors[statusColor]
    } else if (!editable) {
      _style.borderColor = hexToRgba(theme.colors.text, 0.4)
    }

    return _style
  }, [
    editable,
    focused,
    left,
    right,
    status,
    statusColor,
    theme.colors,
    theme.spacing,
    value
  ])

  const labelColor = useMemo<LabelProps>(
    () => ({
      alpha: 0.6,
      color: 'text'
    }),
    []
  )

  return (
    <Flex>
      <Text {...labelColor} type="body3">
        {label}
      </Text>
      <Space size="tiny" />
      <Flex>
        <TextInput
          {...{ autoFocus, editable, style, value, ...props }}
          onBlur={e => {
            onBlur && onBlur(e)
            setFocused(false)
          }}
          onFocus={e => {
            onFocus && onFocus(e)
            setFocused(true)
          }}
          placeholderTextColor={hexToRgba(theme.colors.text, 0.4)}
        />
        {!!left && (
          <Flex
            alignItems="center"
            justifyContent="center"
            style={{
              height: iconSize,
              position: 'absolute',
              right: normalize(theme.spacing.small),
              top: (inputHeight - iconSize) / 2,
              width: iconSize
            }}
          >
            {left(labelColor)}
          </Flex>
        )}
        {!!status && !focused ? (
          <Flex
            alignItems="center"
            justifyContent="center"
            style={{
              backgroundColor: hexToRgba(theme.colors[statusColor], 0.1),
              borderRadius: iconSize,
              height: iconSize,
              position: 'absolute',
              right: normalize(theme.spacing.small),
              top: (inputHeight - iconSize) / 2,
              width: iconSize
            }}
          >
            {status === 'error' && <Icon.ICExclamation color={statusColor} />}
            {status === 'success' && <Icon.ICChecklist color={statusColor} />}
          </Flex>
        ) : (
          <>
            {!!right && (
              <Flex
                alignItems="center"
                justifyContent="center"
                style={{
                  height: iconSize,
                  position: 'absolute',
                  left: normalize(theme.spacing.small),
                  top: (inputHeight - iconSize) / 2,
                  width: iconSize
                }}
              >
                {right(labelColor)}
              </Flex>
            )}
          </>
        )}
      </Flex>
      {!!statusMessage && (
        <>
          <Space size="tiny" />
          <Text
            {...(status ? {} : { alpha: 0.4 })}
            color={status ? statusColor : 'text'}
            type="body4"
          >
            {statusMessage}
          </Text>
        </>
      )}
    </Flex>
  )
}
