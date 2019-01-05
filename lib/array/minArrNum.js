'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isArray = require('../basic/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function minArrNum(arr) {
  if (!(0, _isArray2.default)(arr)) {
    console.warn('param type is array');
    return NaN;
  }
  return arr.reduce(function (a, b) {
    return Math.min(a, b);
  });
} /**
   * @name minArrNum, 数组最小数
   * @param {*} arr
   * @returns
   */
exports.default = minArrNum;