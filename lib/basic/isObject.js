'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @param {*} value 检查参数
 * @returns {boolean} 返回检查结果；`true`，则`value`是对象，否则不是
 * @example
 * 
 * isObject({});
 * // => true
 * 
 * isObject([]);
 * // => false
 * 
 * isObject(null);
 * // => false
 */

function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

exports.default = isObject;