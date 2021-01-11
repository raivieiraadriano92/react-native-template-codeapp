import styled, { DefaultTheme } from 'styled-components/native'
import normalize from 'react-native-normalize'

type Props = {
  size: keyof DefaultTheme['spacing']
  type?: 'horizontal' | 'vertical'
}

export default styled.View<Props>`
  height: ${props =>
    props.type === 'vertical'
      ? '100%'
      : `${normalize(props.theme.spacing[props.size], 'height')}px`};
  width: ${props =>
    props.type === 'vertical'
      ? `${normalize(props.theme.spacing[props.size])}px`
      : '100%'};
`
