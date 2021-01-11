import { DefaultTheme } from 'styled-components/native'

const spacing: DefaultTheme['spacing'] = {
  tiny: 8,
  small: 16,
  medium: 24,
  large: 40
}

const theme: DefaultTheme = {
  colors: {
    background: '#FAFAFA',
    black: '#000',
    primary120: '#3C49F5',
    primary100: '#5460FE',
    primary80: '#868EFF',
    primary60: '#BDC1FF',
    primary40: '#E2E4FF',
    text100: '#051E56',
    text80: '#526286',
    text60: '#9CA5BA',
    text40: '#B3BCCF',
    transparent: 'transparent',
    white: '#FFF'
  },
  hitSlop: {
    top: spacing.tiny,
    left: spacing.tiny,
    bottom: spacing.tiny,
    right: spacing.tiny
  },
  spacing
}

export default theme
