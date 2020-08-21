/**
 * @name filterTree, 树状结构数据过滤集合
 * @param {*} data
 * @param {*} id
 * @param {string} [key="id"]
 * @returns
 */
import isArray from './isArray';

function filterTree(data, id, key = 'id') {
  if (!isArray(data)) {
    return new Error('data params is array type');
  }
  let newData = data.filter((x) => x[key] !== id);
  newData = newData.map((item) => {
    const x = { ...item };
    x.children && (x.children = filterTree(x.children, id, key));
    return x;
  });
  return newData;
}

export default filterTree;
