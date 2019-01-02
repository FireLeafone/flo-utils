/**
 * @param {*} value 检查参数
 * @returns {boolean} 返回检查结果；`true`，则`value`是`null`，否则不是
 * @example
 * 
 * isNull(null);
 * // => true
 * 
 * isNull('null');
 * // => false
 * 
 * isNull(void 0);
 * // => false
 */

function isNull(value) {
  return value === null;
}

export default isNull;
