import React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'
import { useTheme } from 'styled-components/native'

import { hexToRgba } from 'src/utils'

import { Props } from '..'
import { resize } from '../utils'

export default function ({
  alpha = 1,
  color = 'text',
  size = 24
}: Props): JSX.Element {
  const { height, width } = resize({ height: 19.94, size, width: 19.94 })

  const theme = useTheme()

  return (
    <Svg {...{ height, width }} viewBox="0 0 24 24" fill="none">
      <Circle
        cx={12}
        cy={12}
        r={7.25}
        stroke={hexToRgba(theme.colors[color], alpha)}
        strokeWidth={1.5}
      />
      <Path
        d="M9 12.512l2.5 1.988L15 10"
        stroke={hexToRgba(theme.colors[color], alpha)}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
