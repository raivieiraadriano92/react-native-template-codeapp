import { DefaultTheme } from 'styled-components/native'

const spacing: DefaultTheme['spacing'] = {
  tinyest: 4,
  tiny: 8,
  small: 16,
  medium: 24,
  large: 40
}

const lightColors: DefaultTheme['colors'] = {
  black: '#000',
  error: '#FE5454',
  primary: '#5460FE',
  success: '#6CDD8B',
  systemBackgroundPrimary: '#FFF',
  systemBackgroundSecondary: '#F5F8FD',
  systemLine: '#EEF2F9',
  text: '#051E56',
  transparent: 'transparent',
  white: '#FFF'
}

export const darkColors: DefaultTheme['colors'] = {
  ...lightColors,
  systemBackgroundPrimary: '#151835',
  systemBackgroundSecondary: '#272B54',
  text: lightColors.white
}

const theme: DefaultTheme = {
  colors: lightColors,
  hitSlop: {
    top: spacing.tiny,
    left: spacing.tiny,
    bottom: spacing.tiny,
    right: spacing.tiny
  },
  spacing
}

export default theme
