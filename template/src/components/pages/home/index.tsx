import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { Flex, Icon, Space, Text } from 'src/components/atoms'
import { Button, Input } from 'src/components/molecules'
import { useGeneralContext } from 'src/contexts/general'
import { RootStackNavigator } from 'src/navigator'

export default function (): JSX.Element {
  const navigation = useNavigation<StackNavigationProp<RootStackNavigator>>()

  const [text, setText] = useState<string>('Some title')

  const generalContext = useGeneralContext()

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => {
            navigation.navigate('MakeSomething')
          }}
          size="small"
          title="Make"
          type="tertiary"
        />
      ),
      title: 'Hello, John Doe!'
    })
  }, [navigation])

  return (
    <ScrollView>
      <Flex padding="medium">
        <Button
          onPress={() => {
            generalContext.toggleDarkMode()
          }}
          title={generalContext.darkMode ? 'Light' : 'Dark'}
        />
        <Space size="large" />
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
        <Input
          label="Title"
          left={({ alpha, color }) => (
            <Icon.ICExclamation {...{ alpha, color }} />
          )}
          onChangeText={_text => setText(_text)}
          placeholder="Enter your title"
          right={({ alpha, color }) => (
            <Icon.ICExclamation {...{ alpha, color }} />
          )}
          value={text}
        />
        <Space size="small" />
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
        <Button
          disabled
          onPress={() => {
            //
          }}
          title="Button"
        />
        <Space size="small" />
        <Button
          onPress={() => {
            //
          }}
          title="Button"
        />
        <Space size="small" />
        <Button
          onPress={() => {
            //
          }}
          size="small"
          title="Button"
        />
        <Space size="small" />
        <Button
          disabled
          onPress={() => {
            //
          }}
          title="Button"
          type="secondary"
        />
        <Space size="small" />
        <Button
          onPress={() => {
            //
          }}
          title="Button"
          type="secondary"
        />
        <Space size="small" />
        <Button
          onPress={() => {
            //
          }}
          size="small"
          title="Button"
          type="secondary"
        />
        <Space size="small" />
        <Button
          disabled
          onPress={() => {
            //
          }}
          title="Button"
          type="tertiary"
        />
        <Space size="small" />
        <Button
          onPress={() => {
            //
          }}
          title="Button"
          type="tertiary"
        />
        <Space size="small" />
        <Button
          onPress={() => {
            //
          }}
          size="small"
          title="Button"
          type="tertiary"
        />
      </Flex>
    </ScrollView>
  )
}
