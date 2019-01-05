'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _isArray = require('../basic/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _isObject = require('../basic/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @link https://github.com/lodash/lodash/blob/es/filter.js， 目前只支持数组类型过滤，需要对`arrayLink`进行过滤，使用_.filter()
 */

/**
 * @name filter, 数据过滤
 * @param {*} collection
 * @param {function} func return boolean
 */

function filter(collection, func) {
  var result = null;
  if (typeof func !== 'function') {
    return new Error('second param is object or array !');
  }
  if ((0, _isArray2.default)(collection)) {
    result = collection.filter(function (item, i) {
      return func(item, i);
    });
  } else if ((0, _isObject2.default)(collection)) {
    var keysArr = (0, _keys2.default)(collection);
    var keysFilter = keysArr.filter(function (key) {
      return func(collection[key], key);
    });

    result = {};
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = (0, _getIterator3.default)(keysFilter), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var key = _step.value;

        var keyVal = collection[key];
        if (typeof keyVal === 'string') {
          keyVal = keyVal.trim();
        }
        result[key] = keyVal;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  } else {
    return new Error('1st param is object or array !');
  }

  return result;
}

exports.default = filter;