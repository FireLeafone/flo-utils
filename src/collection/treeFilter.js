/**
 * @name filterTree, 树状结构数据过滤
 * @param {*} data
 * @param {*} id
 * @param {string} [key="id"]
 * @returns
 */
import isArray from '../basic/isArray';

function filterTree (data, id, key = "id") {
  if (!isArray(data)) {
    return new Error('data params is array type');
  }
  var newData = data.filter(x => x[key] !== id);
  newData.forEach(x => x.children && (x.children = filterTree(x.children, id, key)));
  return newData;
}

export default filterTree;