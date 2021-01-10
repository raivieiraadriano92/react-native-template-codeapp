import React from 'react'

import { Flex, Text } from 'src/components/atoms'

export default function () {
  return (
    <Flex flex padding="medium">
      <Text type="h1">Headline 1</Text>
      <Text type="h2">Headline 2</Text>
      <Text type="h3">Headline 3</Text>
      <Text type="h4">Headline 4</Text>
      <Text type="subtitle1">Subtitle 1</Text>
      <Text type="subtitle2">Subtitle 2</Text>
      <Text type="body1">Body 1</Text>
      <Text type="body2">Body 2</Text>
      <Text type="body3">Body 3</Text>
    </Flex>
  )
}
