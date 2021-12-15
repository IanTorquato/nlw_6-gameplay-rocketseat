// eslint-disable-next-line func-names
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@configs': './src/configs',
            '@contexts': './src/contexts',
            '@global': './src/global',
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@services': './src/services',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  };
};
