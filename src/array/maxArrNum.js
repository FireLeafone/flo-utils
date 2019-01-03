/**
 * @name maxArrNum, 数组最大数
 * @param {*} arr
 * @returns
 */
import isArray from '../basic/isArray';
function maxArrNum(arr) {
  if (!isArray(arr)) {
    console.warn('param type is array')
    return 0;
  }
  return arr.reduce((a, b) => {
    return Math.max(a, b);
  });
};

export default maxArrNum;