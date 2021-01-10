import styled, { DefaultTheme } from 'styled-components/native'

type Props = {
  size: keyof DefaultTheme['spacing']
  type?: 'horizontal' | 'vertical'
}

export default styled.View<Props>`
  height: ${props =>
    props.type === 'vertical'
      ? '100%'
      : `${props.theme.spacing[props.size]}px`};
  width: ${props =>
    props.type === 'vertical'
      ? `${props.theme.spacing[props.size]}px`
      : '100%'};
`
