import Color from 'color'

export default function (hex: string, alpha = 1): string {
  return `rgba(${Color(hex).rgb().array().join(',')},${alpha})`
}
