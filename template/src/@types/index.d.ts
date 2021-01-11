import { Insets } from 'react-native'
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string
      error100: string
      error10: string
      primary120: string
      primary100: string
      primary80: string
      primary60: string
      primary40: string
      success100: string
      success10: string
      systemBackgroundPrimary: string
      systemBackgroundSecondary: string
      systemLine: string
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
      [K in 'tinyest' | 'tiny' | 'small' | 'medium' | 'large']: number
    }
  }
}
