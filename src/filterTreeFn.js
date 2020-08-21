/**
 * @name filterTree, 树状结构数据过滤集合
 * @param {*} data
 * @param {*} fn
 * @param {string} [childrenKey="children"]
 * @returns
 */
import isArray from './isArray';

export const DEFAULT_VALUE = [];

function filterTreeFn(data, fn, childrenKey = 'children') {
  if (!isArray(data)) {
    return DEFAULT_VALUE;
  }
  if (!data.length) return DEFAULT_VALUE;
  let newData = data.filter(fn);
  newData = newData.map((item) => {
    const x = { ...item };
    x[childrenKey] && (x[childrenKey] = filterTreeFn(x[childrenKey], fn));
    return x;
  });

  const filterData = newData.filter(fn);

  return filterData;
}

export default filterTreeFn;
