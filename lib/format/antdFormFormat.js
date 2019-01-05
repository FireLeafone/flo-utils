'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _isObject = require('../basic/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function antFormFormat() {
  var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (!(0, _isObject2.default)(record)) {
    new Error('param is object type');
    return;
  }
  var keys = (0, _keys2.default)(record);
  var obj = {};

  keys.forEach(function (key) {
    obj[key] = {};
    obj[key].value = record[key];
  });
  return obj;
} /**
   * @name antFormFormat
   * @param {object} record
   * @returns {object}
   * @description 格式化antd-form回显数据
   */

exports.default = antFormFormat;