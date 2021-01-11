import normalize from 'react-native-normalize'

type ResizeProps = {
  height: number
  size: number
  width: number
}

type ResizeReturn = Pick<ResizeProps, 'height' | 'width'>

export function resize({ height, size, width }: ResizeProps): ResizeReturn {
  let newHeight
  let newWidth

  if (height === width) {
    newHeight = size
    newWidth = size
  } else if (height > width) {
    newHeight = size
    newWidth = (size * width) / height
  } else {
    newHeight = (size * height) / width
    newWidth = size
  }

  return {
    height: normalize(newHeight),
    width: normalize(newWidth)
  }
}
