'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isObject = require('../basic/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function emptyObj(obj) {
  if (!(0, _isObject2.default)(obj)) {
    new Error('type is object');
    return false;
  }
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
} /**
   * @name emptyObj 判断空对象
   * @param {*} obj
   * @returns
   */
exports.default = emptyObj;