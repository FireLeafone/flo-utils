/**
 * @name arrayToTree, 扁平化数组格式转树状结构
 * @param {*} arr
 * @param {string} [id="id"]
 * @param {string} [pid="pid"]
 * @param {string} [children="children"]
 */
import isArray from '../basic/isArray';
 
function arrayToTree(arr, id="id", pid="pid", children="children") {
  if (!isArray(arr)) {
    return new Error('data params is array type');
  }
  const data = [].concat(arr);
  const result = [];
  const hash = {};
  data.forEach((item, index) => {
    hash[data[index][id]] = item;
  });

  data.forEach((item) => {
    const hashVP = hash[item[pid]]; // 获取的实质还是data下的对象
    if (hashVP) {
      !hashVP[children] && (hashVP[children] = []);
      hashVP[children].push(item);
    } else {
      result.push(item);
    }
  });
  return result;
}

export default arrayToTree;
