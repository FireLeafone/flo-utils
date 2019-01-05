'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isArray = require('../basic/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getNodeByKeyValues() {
  var collection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'key';
  var childrenKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "children";

  if (!(0, _isArray2.default)(collection) || !(0, _isArray2.default)(values)) {
    new Error('first param and srcond param type is array');
    return [];
  }

  var nodes = [];
  var findNodes = function findNodes(collecs) {
    collecs.forEach(function (item) {
      if (item[key] && values.indexOf(item[key]) >= 0) {
        nodes.push(item);
      }
      if (item[childrenKey] && item[childrenKey].length) {
        findNodes(item[childrenKey]);
      }
    });
  };

  findNodes(collection);

  return nodes;
} /**
   * @name getNodeByKeyValues, 获取节点
   * @param {*} [collection=[]]
   * @param {*} [values=[]]
   * @param {string} [key='key']
   * @param {string} [key='children'] 非必须
   * @description 根据`key` 匹配 `values`中的值，获取对应`node`
   * @example
   * 
   * getNodeByKeyValues([{name: 'ass'}, {name: 'a', children: [{name: 'ass', type: 'children'}]}], ['ass'], 'name');
   * => [{name: 'ass'}, {name: 'ass', type: 'children'}] // 打平返回
   * 
   */

exports.default = getNodeByKeyValues;