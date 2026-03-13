module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@api': './src/api',
          '@components': './src/components',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@hooks': './src/hooks',
          '@services': './src/services',
          '@utils': './src/utils',
          '@constants': './src/constants',
          '@context': './src/context',
          '@assets': './src/assets',
          '@store': './src/store',
          '@models': './src/models',
        },
      },
    ],
    'react-native-reanimated/plugin', // reanimated plugin
  ],
};