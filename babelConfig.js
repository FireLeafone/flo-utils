function resolve(moduleName) {
  return require.resolve(moduleName);
}

module.exports = function (modules) {
  const presets = [
    [
      resolve("@babel/preset-env"),
      {
        "modules": modules,
        "targets": {
          "browsers": [
            "> 1%",
            "last 2 versions",
            "not ie <= 8"
          ],
          node: 'current'
        }
      }
    ]
  ];

  const plugins = [
    resolve("babel-plugin-lodash"),
    [
      resolve('@babel/plugin-transform-runtime'),
      {
        helpers: false,
      },
    ],
  ];

  return {
    presets,
    plugins
  };
};
