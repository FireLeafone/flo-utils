'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getOwnPropertyNames = require('babel-runtime/core-js/object/get-own-property-names');

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _isObject = require('../basic/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isEquivalentObj(a, b) {
  if (!(0, _isObject2.default)(a) || !(0, _isObject2.default)(b)) {
    new Error('type is object');
    return false;
  }
  // 获取对象属性的所有的键
  var aProps = (0, _getOwnPropertyNames2.default)(a);
  var bProps = (0, _getOwnPropertyNames2.default)(b);

  // 如果键的数量不同，那么两个对象内容也不同
  if (aProps.length != bProps.length) {
    return false;
  }

  for (var i = 0, len = aProps.length; i < len; i++) {
    var propName = aProps[i];

    // 如果对应的值不同，那么对象内容也不同
    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  return true;
} /**
   *
   * @name isEquivalentObj， 对象判等
   * @param {object} a
   * @param {object} b
   */

exports.default = isEquivalentObj;