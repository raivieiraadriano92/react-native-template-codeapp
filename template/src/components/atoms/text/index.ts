import { TextStyle } from 'react-native'
import styled, { DefaultTheme } from 'styled-components/native'
import normalize from 'react-native-normalize'

import { fonts } from 'src/theme'
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
  [K in Type]: Required<Pick<TextStyle, 'fontFamily' | 'fontSize'>>
} = {
  h1: {
    fontFamily: fonts.semiBold,
    fontSize: 48
  },
  h2: {
    fontFamily: fonts.semiBold,
    fontSize: 34
  },
  h3: {
    fontFamily: fonts.bold,
    fontSize: 24
  },
  h4: {
    fontFamily: fonts.medium,
    fontSize: 18
  },
  subtitle1: {
    fontFamily: fonts.bold,
    fontSize: 16
  },
  subtitle2: {
    fontFamily: fonts.bold,
    fontSize: 14
  },
  body1: {
    fontFamily: fonts.regular,
    fontSize: 16
  },
  body2: {
    fontFamily: fonts.regular,
    fontSize: 14
  },
  body3: {
    fontFamily: fonts.regular,
    fontSize: 12
  },
  body4: {
    fontFamily: fonts.regular,
    fontSize: 10
  }
}

export default styled.Text<Props>`
  ${props => (props.flexWrap ? `flex:1; flex-wrap: ${props.flexWrap};` : '')}
  color: ${props =>
    hexToRgba(props.theme.colors[props.color || 'text'], props.alpha)};
  font-family: ${props => styles[props.type].fontFamily};
  font-size: ${props => normalize(styles[props.type].fontSize)}px;
  text-align: ${props => props.textAlign || 'left'};
`
