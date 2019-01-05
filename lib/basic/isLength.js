'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _maxSafeInteger = require('babel-runtime/core-js/number/max-safe-integer');

var _maxSafeInteger2 = _interopRequireDefault(_maxSafeInteger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {*} value 检查参数
 * @returns {boolean} 返回检查结果；`true`，则`value`是length，否则不是
 * @example
 * 
 * isLength(3);
 * // => true
 * 
 * isLength(Number.MIN_VALUE);
 * // => false
 * 
 * isLength('3');
 * // => false
 */

// Number.MAX_SAFE_INTEGER
var MAX_SAFE_INTEGER = _maxSafeInteger2.default;

function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

exports.default = isLength;