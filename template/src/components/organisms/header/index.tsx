import React, { ReactNode } from 'react'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Flex, Icon, Text } from 'src/components/atoms'

type Props = {
  goBack?(): void
  right?: ReactNode
  title?: string
}

export default function ({ goBack, right, title }: Props): JSX.Element {
  return (
    <SafeAreaView edges={['top']}>
      <Flex alignItems="center" flexDirection="row" padding="medium">
        {!!goBack && (
          <Flex marginRight="small">
            <TouchableOpacity onPress={goBack}>
              <Icon.ArrowBack alpha={0.6} />
            </TouchableOpacity>
          </Flex>
        )}
        {!!title && (
          <Text flexWrap="wrap" type="h3">
            {title}
          </Text>
        )}
        {right}
      </Flex>
    </SafeAreaView>
  )
}
