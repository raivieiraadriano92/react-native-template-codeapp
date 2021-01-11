import React from 'react'
import { ScrollView } from 'react-native'

import { Flex, Space, Text } from 'src/components/atoms'
import { Button } from 'src/components/molecules'

export default function () {
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <Flex padding="medium">
        <Text type="h1">Headline 1</Text>
        <Text type="h2">Headline 2</Text>
        <Text type="h3">Headline 3</Text>
        <Text type="h4">Headline 4</Text>
        <Text type="subtitle1">Subtitle 1</Text>
        <Text type="subtitle2">Subtitle 2</Text>
        <Text type="body1">Body 1</Text>
        <Text type="body2">Body 2</Text>
        <Text type="body3">Body 3</Text>
        <Space size="large" />
        <Button disabled onPress={() => {}} title="Button" />
        <Space size="small" />
        <Button onPress={() => {}} title="Button" />
        <Space size="small" />
        <Button onPress={() => {}} size="small" title="Button" />
        <Space size="small" />
        <Button disabled onPress={() => {}} title="Button" type="secondary" />
        <Space size="small" />
        <Button onPress={() => {}} title="Button" type="secondary" />
        <Space size="small" />
        <Button
          onPress={() => {}}
          size="small"
          title="Button"
          type="secondary"
        />
        <Space size="small" />
        <Button disabled onPress={() => {}} title="Button" type="tertiary" />
        <Space size="small" />
        <Button onPress={() => {}} title="Button" type="tertiary" />
        <Space size="small" />
        <Button
          onPress={() => {}}
          size="small"
          title="Button"
          type="tertiary"
        />
      </Flex>
    </ScrollView>
  )
}
