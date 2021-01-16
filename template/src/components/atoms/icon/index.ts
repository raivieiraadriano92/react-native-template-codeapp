import { DefaultTheme } from 'styled-components'

import ArrowBack from './sources/arrow-back'
import ICChecklist from './sources/ic-checklist'
import ICExclamation from './sources/ic-exclamation'

export type Props = {
  alpha?: number
  color?: keyof DefaultTheme['colors']
  size?: number
}

export default {
  ArrowBack,
  ICChecklist,
  ICExclamation
}
