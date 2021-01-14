import { TextStyle } from 'react-native'
import styled, { DefaultTheme } from 'styled-components/native'
import normalize from 'react-native-normalize'

import { hexToRgba } from 'src/utils'

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
  | 'body4'

export type Props = Pick<TextStyle, 'flexWrap' | 'textAlign'> & {
  alpha?: number
  color?: keyof DefaultTheme['colors']
  type: Type
}

export const styles: {
  [K in Type]: Required<Pick<TextStyle, 'fontSize' | 'fontWeight'>>
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
  },
  body4: {
    fontSize: 10,
    fontWeight: '500'
  }
}

export default styled.Text<Props>`
  ${props => (props.flexWrap ? `flex:1; flex-wrap: ${props.flexWrap};` : '')}
  color: ${props =>
    hexToRgba(props.theme.colors[props.color || 'text'], props.alpha)};
  font-size: ${props => normalize(styles[props.type].fontSize)}px;
  font-weight: ${props => styles[props.type].fontWeight || 'normal'};
  text-align: ${props => props.textAlign || 'left'};
`
