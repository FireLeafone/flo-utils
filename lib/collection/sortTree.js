'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _isArray = require('../basic/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _isObject = require('../basic/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _isNumber = require('../basic/isNumber');

var _isNumber2 = _interopRequireDefault(_isNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sortTree = function sortTree() {
  var tree = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var sort = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';
  var sortKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'sort';
  var childrenKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'children';

  if (!(0, _isArray2.default)(tree) || !tree.length) return [];

  if (tree.length < 2) {
    if (tree[0][childrenKey] && tree[0][childrenKey].length) {
      tree[0][childrenKey] = sortTree(tree[0][childrenKey], sort, sortKey, childrenKey);
    }
  } else {
    tree.sort(function (a, b) {
      if ((0, _isNumber2.default)(a) && (0, _isNumber2.default)(b)) {
        if (sort === 'asc') {
          return a - b;
        } else if (sort === 'desc') {
          return b - a;
        } else {
          return 0;
        }
      } else if ((0, _isObject2.default)(a) && (0, _isObject2.default)(b)) {
        if (a[childrenKey] && a[childrenKey].length) {
          a[childrenKey] = sortTree(a[childrenKey], sort, sortKey, childrenKey);
        }
        if (b[childrenKey] && b[childrenKey].length) {
          b[childrenKey] = sortTree(b[childrenKey], sort, sortKey, childrenKey);
        }
        if (!a[sortKey] && a[sortKey] !== 0 || !b[sortKey] && b[sortKey] !== 0) {
          return 0;
        }

        if (sort === 'asc') {
          return a[sortKey] - b[sortKey];
        } else if (sort === 'desc') {
          return b[sortKey] - a[sortKey];
        } else {
          return 0;
        }
      }
      return 0;
    });
  }
  return [].concat((0, _toConsumableArray3.default)(tree));
}; /**
   * 排序 树状结构
   * @param   {array}     tree
   * @param   {String}    sort
   * @param   {String}    sortKey
   * @param   {String}    childrenKey
   * @return  {Array}
   */

exports.default = sortTree;