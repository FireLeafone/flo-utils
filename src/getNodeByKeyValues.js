/**
 * @name getNodeByKeyValues, 获取节点
 * @param {*} [collection=[]]
 * @param {*} [values=[]]
 * @param {string|function} [key='key'] 支持 Fn(item, valus): boolean 自定义比较
 * @param {string} [key='children'] 非必须
 * @description 根据`key` 匹配 `values`中的值，获取对应`node`
 * @example
 *
 * getNodeByKeyValues([{name: 'ass'}, {name: 'a', children: [{name: 'ass', type: 'children'}]}], ['ass'], 'name');
 * => [{name: 'ass'}, {name: 'ass', type: 'children'}] // 打平返回
 *
 */

import isArray from './isArray';
import { consoleWran } from './warn/util';

export const DEFAULT_VALUE = [];

function getNodeByKeyValues(
  collection = [],
  values = [],
  keyF = 'key', // fn
  childrenKey = 'children',
) {
  if (!isArray(collection) || !isArray(values)) {
    consoleWran('first param and srcond param type is array');
    return DEFAULT_VALUE;
  }

  const nodes = [];
  const findNodes = (collecs) => {
    collecs.forEach((item) => {
      if (typeof keyF === 'function' && keyF(item, values)) {
        nodes.push(item);
      } else if (item[keyF] && values.includes(item[keyF])) {
        nodes.push(item);
      }
      if (item[childrenKey] && item[childrenKey].length) {
        findNodes(item[childrenKey]);
      }
    });
  };

  findNodes(collection);

  return nodes;
}

export default getNodeByKeyValues;
