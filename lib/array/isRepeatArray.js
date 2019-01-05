'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _isArray = require('../basic/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _isObject = require('../basic/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isRepeatArray
 * @param {*} [arr=[]]
 * @param {string} [key='id']
 * @returns {boolean}
 */
function isRepeatArray() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key';

  if ((0, _isArray2.default)(arr)) {
    var obj = {};
    for (var i = 0, length = arr.length; i < length; i++) {
      if ((0, _isObject2.default)(arr[i])) {
        obj[arr[i][key] || i] = i;
      } else {
        obj[arr[i]] = i;
      }
    }
    return arr.length !== (0, _keys2.default)(obj).length;
  } else {
    return new Error('first params is array type');
  }
}

exports.default = isRepeatArray;