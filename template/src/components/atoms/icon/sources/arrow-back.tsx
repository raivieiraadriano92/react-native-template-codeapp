import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { useTheme } from 'styled-components/native'

import { hexToRgba } from 'src/utils'

import { Props } from '..'
import { resize } from '../utils'

export default function ({
  alpha = 1,
  color = 'text',
  size = 24
}: Props): JSX.Element {
  const { height, width } = resize({ height: 24, size, width: 24 })

  const theme = useTheme()

  return (
    <Svg {...{ height, width }} viewBox="0 0 24 24" fill="none">
      <Path
        d="M9.313 4.273a1 1 0 111.374 1.454L9.313 4.273zm-5.649 6.712l.687.727-.687-.727zm0 3.03l.687-.727-.687.727zm7.023 5.258a1 1 0 11-1.374 1.454l1.374-1.454zm0-13.546L4.35 11.712l-1.373-1.454 6.335-5.985 1.374 1.454zM4.35 13.288l6.336 5.985-1.374 1.454-6.335-5.985 1.373-1.454zm0-1.576a1.06 1.06 0 000 1.576l-1.373 1.454a3.06 3.06 0 010-4.484l1.373 1.454z"
        fill={hexToRgba(theme.colors[color], alpha)}
      />
      <Path
        d="M3 12.5h17.5"
        stroke={hexToRgba(theme.colors[color], alpha)}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
