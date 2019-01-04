/**
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

import isArray from '../basic/isArray';

function getNodeByKeyValues (collection = [], values = [], key = 'key', childrenKey = "children") {
  if (!isArray(collection) || !isArray(values)) {
    new Error('first param and srcond param type is array');
    return [];
  }

  const nodes = [];
  const findNodes = (collecs) => {
    collecs.forEach(item => {
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
}

export default getNodeByKeyValues;