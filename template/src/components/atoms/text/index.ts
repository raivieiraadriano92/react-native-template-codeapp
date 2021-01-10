import { TextStyle } from 'react-native'
import styled, { DefaultTheme } from 'styled-components/native'

type Type =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'body3'

export type Props = Pick<TextStyle, 'flexWrap' | 'textAlign'> & {
  color?: keyof DefaultTheme['colors']
  type: Type
}

export const styles: {
  [K in Type]: Pick<TextStyle, 'fontSize' | 'fontWeight'>
} = {
  h1: {
    fontSize: 48,
    fontWeight: '600'
  },
  h2: {
    fontSize: 34,
    fontWeight: '600'
  },
  h3: {
    fontSize: 20,
    fontWeight: '700'
  },
  h4: {
    fontSize: 20,
    fontWeight: '500'
  },
  subtitle1: {
    fontSize: 16,
    fontWeight: '700'
  },
  subtitle2: {
    fontSize: 14,
    fontWeight: '700'
  },
  body1: {
    fontSize: 16,
    fontWeight: '400'
  },
  body2: {
    fontSize: 14,
    fontWeight: '400'
  },
  body3: {
    fontSize: 12,
    fontWeight: '400'
  }
}

export default styled.Text<Props>`
  ${props => (props.flexWrap ? `flex:1; flex-wrap: ${props.flexWrap};` : '')}
  color: ${props => props.theme.colors[props.color || 'black']};
  font-size: ${props => styles[props.type].fontSize}px;
  font-weight: ${props => styles[props.type].fontWeight || 'normal'};
  text-align: ${props => props.textAlign || 'left'};
`
