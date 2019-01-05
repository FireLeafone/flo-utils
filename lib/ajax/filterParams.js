'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _filter = require('../collection/filter');

var _filter2 = _interopRequireDefault(_filter);

var _isObject = require('../basic/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _isArray = require('../basic/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _emptyObj = require('../object/emptyObj');

var _emptyObj2 = _interopRequireDefault(_emptyObj);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name filterParams, 过滤参数
 * @param {*} params
 * @returns
 */

function filterParams(params) {
  var newParams = params ? (0, _filter2.default)(params, function (item) {
    if (typeof item === 'string') {
      var str = item.trim();
      if (!str) {
        return false;
      }
    } else if ((0, _isArray2.default)(item)) {
      if (!item.length) {
        return false;
      }
    } else if ((0, _isObject2.default)(item)) {
      if ((0, _emptyObj2.default)(item)) {
        return false;
      }
    } else if (!item && item !== 0) {
      return false;
    }
    return true;
  }) : {};

  return newParams;
}

exports.default = filterParams;