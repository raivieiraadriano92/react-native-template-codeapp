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
