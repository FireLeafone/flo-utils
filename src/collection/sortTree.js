/**
* 排序 树状结构
* @param   {array}     tree
* @param   {String}    sort
* @param   {String}    sortKey
* @param   {String}    childrenKey
* @return  {Array}
*/

import isArray from '../basic/isArray';

const sortTree = (tree = [], childrenKey = 'children', sortKey = 'sort', sort = 'asc') => {
  if (!isArray(tree) || !tree.length) return [];

  if (tree.length < 2) {
    if (tree[0][childrenKey] && tree[0][childrenKey].length) {
      tree[0][childrenKey] = sortTree(tree[0][childrenKey], childrenKey, sortKey, sort);
    }
  } else {
    tree.sort((a, b) => {
      if (a[childrenKey] && a[childrenKey].length) {
        a[childrenKey] = sortTree(a[childrenKey], childrenKey, sortKey, sort);
      }
  
      if (b[childrenKey] && b[childrenKey].length) {
        b[childrenKey] = sortTree(b[childrenKey], childrenKey, sortKey, sort);
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
    });
  }
  return [...tree];
};

export default sortTree;