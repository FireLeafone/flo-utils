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
  const defaultOpt = {
    childrenKeyName: "children",
    traversal: "DLR" // LRD 后序遍历；DLR 前序遍历
  };
  options = {...defaultOpt, ...options};
  
  function treeMap (tree, parent) {
    return tree.map((item, i) => {
      if (options.traversal == "DLR") {
        item = Fn(item, i, parent);
        if(item[options.childrenKeyName] && item[options.childrenKeyName].length) {
          const children = item[options.childrenKeyName];
          item[options.childrenKeyName] = treeMap(children, item);
        }
      } else if (options.traversal == "LRD") {        
        if(item[options.childrenKeyName] && item[options.childrenKeyName].length) {
          const children = item[options.childrenKeyName];
          item[options.childrenKeyName] = treeMap(children, item);
        }
        item = Fn(item, i, parent);
      }
      return item;
    });
  }

  return treeMap(treeNodes);
}

export default arrayTreeCallBack;