import 'styled-components'

import { Insets } from 'react-native'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string
      black: string
      transparent: string
      white: string
    }
    hitSlop: Insets
    spacing: {
      [K in 'tiny' | 'small' | 'medium' | 'large']: number
    }
  }
}
