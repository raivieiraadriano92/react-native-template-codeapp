import React, { useMemo, useState } from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { DefaultTheme, useTheme } from 'styled-components/native'
import normalize from 'react-native-normalize'

import { Flex, Icon, Space, Text } from 'src/components/atoms'
import { styles as TextStyles } from 'src/components/atoms/text'
import { hexToRgba } from 'src/utils'

type Props = TextInputProps & {
  label: string
  status?: 'error' | 'success'
  statusMessage?: string
}

const inputHeight = normalize(41, 'height')

export default function ({
  autoFocus = false,
  editable = true,
  label,
  onBlur,
  onFocus,
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
      paddingHorizontal: normalize(theme.spacing.small),
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
    }

    return _style
  }, [
    editable,
    focused,
    status,
    statusColor,
    theme.colors,
    theme.spacing.small,
    value
  ])

  return (
    <Flex>
      <Text alpha={0.6} type="body3">
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
        {!!status && !focused && (
          <Flex
            alignItems="center"
            justifyContent="center"
            style={{
              backgroundColor: hexToRgba(theme.colors[statusColor], 0.1),
              borderRadius: normalize(24),
              height: normalize(24),
              position: 'absolute',
              right: normalize(theme.spacing.small),
              top: (inputHeight - normalize(24)) / 2,
              width: normalize(24)
            }}
          >
            {status === 'error' && <Icon.ICExclamation color={statusColor} />}
            {status === 'success' && <Icon.ICChecklist color={statusColor} />}
          </Flex>
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
