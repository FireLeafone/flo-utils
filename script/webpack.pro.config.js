'use strict';

/**
 * webpack build config
 */

var webpack = require('webpack');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
var CONFIG = require('./config');
var utils = require('./utils');

const babelConfig = require('../babelConfig.js')();

console.log(babelConfig);

var baseConfig = {
  mode: 'production',
  entry: utils.resolve('src/index'),
  output: {
    filename: 'floUtils.js',
    path: CONFIG.buildPath,
    library: 'floUtils',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
  resolve: {
    modules: [utils.resolve('node_modules')],
    extensions: ['.js'],
    alias: {},
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader', // 缓存loader执行结果
        exclude: /(node_modules)/,
        options: babelConfig,
      },
    ],
  },
  plugins: [
    new LodashModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(), // 2.x以上；编译时出错，跳过，编译后保错
  ],
};

module.exports = baseConfig;
