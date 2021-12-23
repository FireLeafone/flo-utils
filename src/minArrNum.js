/**
 * @name minArrNum, 数组最小数
 * @param {*} arr
 * @returns
 */
import isArray from './isArray';
import { consoleWran } from './warn/util';

function minArrNum(arr) {
  if (!isArray(arr)) {
    consoleWran('param type is array');
    return NaN;
  }
  return arr.reduce((a, b) => {
    return Math.min(a, b);
  });
}

export default minArrNum;
