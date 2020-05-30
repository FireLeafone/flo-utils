module.exports = {
  basePath: "src", // 源代码基本路径
  buildPath: "dist", // 打包路径
  webpackConfigPath: "./script/webpack.pro.config.js", // webpack 配置路径
  lessPath: [], // 编译的less相对src路径，正则形式 /(\/|\\)style(\/|\\)index\.less$/
  compileLess: false, // 默认不编译
  compileAssets: false, // 默认不编译
  compileTs: false, // 默认不编译 tsconfig.json配置在根目录
};
