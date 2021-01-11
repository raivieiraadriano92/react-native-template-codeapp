import 'styled-components'

import { Insets } from 'react-native'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string
      black: string
      primary120: string
      primary100: string
      primary80: string
      primary60: string
      primary40: string
      text100: string
      text80: string
      text60: string
      text40: string
      text20: string
      transparent: string
      white: string
    }
    hitSlop: Insets
    spacing: {
      [K in 'tiny' | 'small' | 'medium' | 'large']: number
    }
  }
}
