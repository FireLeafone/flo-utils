// jest babel

module.exports = function (api) {
  api.cache(true);
  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['> 1%', 'last 2 versions', 'not ie <= 8'],
          node: 'current',
        },
      },
    ],
  ];

  const plugins = [
    'lodash',
    [
      '@babel/plugin-transform-runtime',
      {
        helpers: false,
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
