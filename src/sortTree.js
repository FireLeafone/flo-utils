/**
 * 排序 树状结构
 * @param   {array}     tree
 * @param   {String}    sort
 * @param   {String}    sortKey
 * @param   {String}    childrenKey
 * @return  {Array}
 */

import isArray from './isArray';
import isObject from './isObject';
import isNumber from './isNumber';

export const DEFAULT_VALUE = [];

const sortTree = (
  te = [],
  sort = 'asc',
  sortKey = 'sort',
  childrenKey = 'children',
) => {
  const tree = [...te];
  if (!isArray(tree) || !tree.length) return DEFAULT_VALUE;

  if (tree.length < 2) {
    if (tree[0][childrenKey] && tree[0][childrenKey].length) {
      tree[0][childrenKey] = sortTree(
        tree[0][childrenKey],
        sort,
        sortKey,
        childrenKey,
      );
    }
  } else {
    tree.sort((m, n) => {
      const a = m;
      const b = n;
      if (isNumber(a) && isNumber(b)) {
        if (sort === 'asc') {
          return a - b;
        } if (sort === 'desc') {
          return b - a;
        }
          return 0;

      } if (isObject(a) && isObject(b)) {
        if (a[childrenKey] && a[childrenKey].length) {
          a[childrenKey] = sortTree(a[childrenKey], sort, sortKey, childrenKey);
        }
        if (b[childrenKey] && b[childrenKey].length) {
          b[childrenKey] = sortTree(b[childrenKey], sort, sortKey, childrenKey);
        }
        if (
          (!a[sortKey] && a[sortKey] !== 0) ||
          (!b[sortKey] && b[sortKey] !== 0)
        ) {
          return 0;
        }

        if (sort === 'asc') {
          // 升序
          return a[sortKey] - b[sortKey];
        } if (sort === 'desc') {
          return b[sortKey] - a[sortKey];
        }
          return 0;

      }
      return 0;
    });
  }
  return [...tree];
};

export default sortTree;
