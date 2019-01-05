'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _isObject = require('../basic/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _isArray = require('../basic/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name queryString
 * @param {*} params
 * @returns {string}
 * @description 参数序列化
 */

function queryString(params) {
  var sendData = params;
  if ((0, _isObject2.default)(sendData)) {
    sendData = (0, _assign2.default)({}, sendData);
    sendData = (0, _keys2.default)(sendData).map(function (key) {
      var value = sendData[key];
      if ((0, _isArray2.default)(value) || (0, _isObject2.default)(value)) {
        value = (0, _stringify2.default)(value);
      }
      return encodeURIComponent(key) + '=' + encodeURIComponent(value);
    }).join('&');
  } else {
    return new Error('params is object type');
  }

  return sendData;
}

exports.default = queryString;