'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @param {*} value 检查参数
 * @returns {boolean} 返回检查结果；`true`，则`value`是`string`，否则不是
 * @example
 * 
 * isString('ad');
 * // => true
 * 
 * isString(1);
 * // => false
 * 
 */

function isString(value) {
  return typeof value == 'string';
}

exports.default = isString;