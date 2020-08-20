/**
 * @name maxArrNum, 数组最大数
 * @param {*} arr
 * @returns
 */
import isArray from './isArray';

function maxArrNum(arr) {
  if (!isArray(arr)) {
    console.warn('param type is array');
    return NaN;
  }
  return arr.reduce((a, b) => {
    return Math.max(a, b);
  });
}

export default maxArrNum;
