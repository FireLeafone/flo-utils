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
  const newData = data.filter((x) => x[key] !== id);
  newData.forEach((item) => {
    const x = { ...item };
    x.children && (x.children = filterTree(x.children, id, key));
  });
  return newData;
}

export default filterTree;
