/**
 * @name arrayTreeCallBack, 树形数组节点callback
 * @param {any} treeNodes 
 * @param {any} Fn (item, i, parent)
 * @param {any} options 
 * @returns 
 */

import isArray from '../basic/isArray';
function arrayTreeCallBack (treeNodes, Fn, options) {
  if (!isArray(treeNodes)) {
    return new Error('data params is array type');
  }
  if (!treeNodes.length) return [];
  
  options = options || {};
  options.childrenKeyName = options.childrenKeyName || 'children';
  
  function treeMap (tree, parent) {
    return tree.map((item, i) => {
      item = Fn(item, i, parent);
      if(item[options.childrenKeyName] && item[options.childrenKeyName].length) {
        const children = item[options.childrenKeyName];
        item[options.childrenKeyName] = treeMap(children, item);
      }

      return item;
    });
  }

  return treeMap(treeNodes);
}

export default arrayTreeCallBack;