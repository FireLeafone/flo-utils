
function resolve(moduleName) {
  return require.resolve(moduleName);
}

module.exports = function (api) {
  api && api.cache(true);
  const presets = [
    [
      resolve("@babel/preset-env"),
      {
        "modules": "auto",
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
    resolve("lodash"),
    resolve("@babel/plugin-transform-runtime")
  ];

  return {
    presets,
    plugins
  };
};
