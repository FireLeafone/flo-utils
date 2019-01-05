'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _beNaN = require('../basic/beNaN');

var _beNaN2 = _interopRequireDefault(_beNaN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name numPoints 数字千分符，支持小数
 * @param {*} num
 * @param {number} [precision=2]
 * @return {string}
 * @example
 * 
 * numPoints(1001);
 * => '1,001.00'
 * 
 * numPoints('sd');
 * => 'sd'
 */

function numPoints(num) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

  var toNum = _lodash2.default.toNumber(num);
  if (!_lodash2.default.isNumber(precision)) {
    new Error('srcond param type is number');
    return num || '';
  }
  if ((0, _beNaN2.default)(toNum)) return num || '';

  var str = toNum.toFixed(precision) + '';
  var decimal = str.split('.')[1] || ''; // 小数部分
  var inter = str.split('.')[0] || ''; // 整数部分
  var revInter = inter.replace(/(?=(?!\b)(\d{3})+$)/g, ',');

  if (precision) {
    var add0 = new Array(precision + 1).join(0).split('').join('');
    if (decimal.length < precision) {
      decimal += add0;
    }
    return revInter + '.' + decimal;
  }
  return revInter;
}

exports.default = numPoints;