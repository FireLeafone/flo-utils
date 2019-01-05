/**
* 排序 树状结构
* @param   {array}     tree
* @param   {String}    sort
* @param   {String}    sortKey
* @param   {String}    childrenKey
* @return  {Array}
*/

import isArray from '../basic/isArray';
import isObject from '../basic/isObject';
import isNumber from '../basic/isNumber';

const sortTree = (tree = [], sort = 'asc', sortKey = 'sort', childrenKey = 'children') => {
  if (!isArray(tree) || !tree.length) return [];

  if (tree.length < 2) {
    if (tree[0][childrenKey] && tree[0][childrenKey].length) {
      tree[0][childrenKey] = sortTree(tree[0][childrenKey], sort, sortKey, childrenKey);
    }
  } else {
    tree.sort((a, b) => {
      if (isNumber(a) && isNumber(b)) {
        if (sort === 'asc') {
          return a - b;
        } else if (sort === 'desc') {
          return b - a;
        } else { 
          return 0;
        }
      } else if (isObject(a) && isObject(b)) {
        if (a[childrenKey] && a[childrenKey].length) {
          a[childrenKey] = sortTree(a[childrenKey], sort, sortKey, childrenKey);
        }
        if (b[childrenKey] && b[childrenKey].length) {
          b[childrenKey] = sortTree(b[childrenKey], sort, sortKey, childrenKey);
        }
        if ((!a[sortKey] && a[sortKey] !== 0) || (!b[sortKey] && b[sortKey] !== 0)) {
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
  return [...tree];
};

export default sortTree;