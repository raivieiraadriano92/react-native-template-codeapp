import { DefaultTheme } from 'styled-components/native'

const spacing: DefaultTheme['spacing'] = {
  tinyest: 4,
  tiny: 8,
  small: 16,
  medium: 24,
  large: 40
}

const theme: DefaultTheme = {
  colors: {
    black: '#000',
    error100: '#FE5454',
    error10: '#ffeeee',
    primary120: '#3C49F5',
    primary100: '#5460FE',
    primary80: '#868EFF',
    primary60: '#BDC1FF',
    primary40: '#E2E4FF',
    success100: '#6CDD8B',
    success10: '#F1FCF4',
    systemBackgroundPrimary: '#FFF',
    systemBackgroundSecondary: '#F5F8FD',
    systemLine: '#EEF2F9',
    text100: '#051E56',
    text80: '#526286',
    text60: '#9CA5BA',
    text40: '#B3BCCF',
    text20: '#DDE4F3',
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
