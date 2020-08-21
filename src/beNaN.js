/**
 * @param {*} value 检查参数
 * @returns {boolean} 返回检查结果；`true`，则`value`是NaN，否则不是
 * @example
 *
 * beNaN(NaN);
 * // => true
 *
 * beNaN(new Number(NaN));
 * // => true
 *
 * window.isNaN(undefined);
 * // => true
 *
 * beNaN(undefined);
 * // => false
 */

import isNumber from './isNumber';

function beNaN(value) {
  return isNumber(value) && value !== +value;
}

export default beNaN;
