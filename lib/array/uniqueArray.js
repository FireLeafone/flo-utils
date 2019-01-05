'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function uniqueArray(arr, key) {
  if (arr.length) {
    if (_lodash2.default.isObject(arr[0])) {
      return key ? _lodash2.default.uniqBy(arr, key) : arr;
    } else {
      return _lodash2.default.uniq(arr);
    }
  }
} /**
   * @link https://github.com/lodash/lodash/blob/es/uniq.js
   * @description 去重
   */

exports.default = uniqueArray;