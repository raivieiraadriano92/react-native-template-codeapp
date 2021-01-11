import { DefaultTheme } from 'styled-components'

import ICChecklist from './sources/ic-checklist'
import ICExclamation from './sources/ic-exclamation'

export type Props = {
  color?: keyof DefaultTheme['colors']
  size?: number
}

export default {
  ICChecklist,
  ICExclamation
}
