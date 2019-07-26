/**
 * @name filterTree, 树状结构数据过滤集合
 * @param {*} data
 * @param {*} fn
 * @param {string} [childrenKey="children"]
 * @returns
 */
import isArray from '../basic/isArray';

export const DEFAULT_VALUE = [];

function filterTreeFn (data, fn, childrenKey = 'children') {
  if (!isArray(data)) {
    return DEFAULT_VALUE;
  }
  if (!data.length) return DEFAULT_VALUE;
  var newData = data.filter(fn);
  newData.forEach(x => x[childrenKey] && (x[childrenKey] = filterTreeFn(x[childrenKey], fn)));

  var filterData = newData.filter(fn);

  return filterData;
}

export default filterTreeFn;