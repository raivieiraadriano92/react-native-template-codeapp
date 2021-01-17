import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useTheme } from 'styled-components/native'

import { Flex, Icon, Space, Text } from 'src/components/atoms'
import { Button, Input, ScrollViewFaded } from 'src/components/molecules'
import { useGeneralContext } from 'src/contexts/general'
import { RootStackNavigator } from 'src/navigator'
import { hexToRgba } from 'src/utils'

export default function (): JSX.Element {
  const generalContext = useGeneralContext()

  const navigation = useNavigation<StackNavigationProp<RootStackNavigator>>()

  const [text, setText] = useState<string>('Some title')

  const theme = useTheme()

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
    <>
      <ScrollViewFaded
        colors={{
          bottom: [
            hexToRgba(theme.colors.systemBackgroundPrimary, 0),
            theme.colors.systemBackgroundPrimary
          ],
          top: [
            theme.colors.systemBackgroundPrimary,
            hexToRgba(theme.colors.systemBackgroundPrimary, 0)
          ]
        }}
        disableTopInset
      >
        <Flex paddingHorizontal="medium">
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
          <Input
            editable={false}
            label="Title"
            placeholder="Enter your title"
          />
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
      </ScrollViewFaded>
      {/* <LinearGradient
        // colors={[
        //   hexToRgba(theme.colors.systemBackgroundPrimary, 0),
        //   theme.colors.systemBackgroundPrimary
        // ]}
        colors={[
          // hexToRgba(theme.colors.systemBackgroundPrimary, 0),
          // theme.colors.systemBackgroundPrimary
          'rgb(79, 206, 249)',
          'rgb(79, 206, 249)'
        ]}
        style={{
          bottom: 0,
          height: 48 + insets.bottom,
          position: 'absolute',
          width: '100%'
        }}
      /> */}
    </>
  )
}
