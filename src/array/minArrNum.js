/**
 * @name minArrNum, 数组最小数
 * @param {*} arr
 * @returns
 */
import isArray from '../basic/isArray';
function minArrNum(arr) {
  if (!isArray(arr)) {
    console.warn('param type is array')
    return 0;
  }
  return arr.reduce((a, b) => {
    return Math.min(a, b);
  });
};

export default minArrNum;