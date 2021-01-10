module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          src: './src'
        }
      }
    ]
  ],
  presets: ['module:metro-react-native-babel-preset']
}
