'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isNumber = require('./isNumber');

var _isNumber2 = _interopRequireDefault(_isNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function beNaN(value) {
  return (0, _isNumber2.default)(value) && value != +value;
} /**
   * @param {*} value 检查参数
   * @returns {boolean} 返回检查结果；`true`，则`value`是NaN，否则不是
   * @example
   * 
   * beNaN(NaN);
   * // => true
   * 
   * beNaN(new Number(NaN));
   * // => true
   * 
   * window.isNaN(undefined);
   * // => true
   * 
   * beNaN(undefined);
   * // => false
   */

exports.default = beNaN;