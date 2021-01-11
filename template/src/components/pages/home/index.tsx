import React, { useState } from 'react'
import { ScrollView } from 'react-native'

import { Flex, Space, Text } from 'src/components/atoms'
import { Button, Input } from 'src/components/molecules'

export default function (): JSX.Element {
  const [text, setText] = useState<string>('Some title')

  return (
    <ScrollView>
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
        <Input label="Title" placeholder="Enter your title" />
        <Space size="small" />
        <Input
          label="Title"
          onChangeText={_text => setText(_text)}
          placeholder="Enter your title"
          value={text}
        />
        <Space size="small" />
        <Input editable={false} label="Title" placeholder="Enter your title" />
        <Space size="small" />
        <Input
          label="Title"
          placeholder="Enter your title"
          statusMessage="Some tip"
        />
        <Space size="small" />
        <Input
          label="Title"
          placeholder="Enter your title"
          status="error"
          statusMessage="Your input is error"
          value={text}
        />
        <Space size="small" />
        <Input
          label="Title"
          placeholder="Enter your title"
          status="success"
          statusMessage="Your action is Success!"
          value={text}
        />
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
