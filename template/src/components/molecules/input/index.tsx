import React, { useMemo, useState } from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { DefaultTheme, useTheme } from 'styled-components/native'
import normalize from 'react-native-normalize'

import { Flex, Icon, Space, Text } from 'src/components/atoms'
import { styles as TextStyles } from 'src/components/atoms/text'

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

  const statusColor = useMemo<
    Record<'base' | 'light', keyof DefaultTheme['colors']>
  >(() => {
    if (status === 'error') {
      return {
        base: 'error100',
        light: 'error10'
      }
    }

    return {
      base: 'success100',
      light: 'success10'
    }
  }, [status])

  const style = useMemo<TextInputProps['style']>(() => {
    const _style: TextInputProps['style'] = {
      borderRadius: normalize(12),
      borderWidth: 1,
      color: theme.colors.text100,
      height: inputHeight,
      paddingHorizontal: normalize(theme.spacing.small),
      ...TextStyles.body2
    }

    if ((!editable || value) && !focused) {
      _style.backgroundColor = theme.colors.white
    } else {
      _style.backgroundColor = theme.colors.systemLine
    }

    if (focused) {
      _style.borderColor = theme.colors.primary100
    } else if (status) {
      _style.borderColor = theme.colors[statusColor.base]
    } else {
      _style.borderColor = theme.colors.systemLine
    }

    return _style
  }, [
    editable,
    focused,
    status,
    statusColor.base,
    theme.colors,
    theme.spacing.small,
    value
  ])

  return (
    <Flex>
      <Text color="text80" type="body3">
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
          placeholderTextColor={theme.colors.text40}
        />
        {!!status && !focused && (
          <Flex
            alignItems="center"
            justifyContent="center"
            style={{
              backgroundColor: theme.colors[statusColor.light],
              borderRadius: normalize(24),
              height: normalize(24),
              position: 'absolute',
              right: normalize(theme.spacing.small),
              top: (inputHeight - normalize(24)) / 2,
              width: normalize(24)
            }}
          >
            {status === 'error' && (
              <Icon.ICExclamation color={statusColor.base} />
            )}
            {status === 'success' && (
              <Icon.ICChecklist color={statusColor.base} />
            )}
          </Flex>
        )}
      </Flex>
      {!!statusMessage && (
        <>
          <Space size="tiny" />
          <Text color={status ? statusColor.base : 'text40'} type="body4">
            {statusMessage}
          </Text>
        </>
      )}
    </Flex>
  )
}
