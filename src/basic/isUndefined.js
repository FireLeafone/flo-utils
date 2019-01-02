/**
 * @param {*} value 检查参数
 * @returns {boolean} 返回检查结果；`true`，则`value`是`undefined`，否则不是
 * @example
 * 
 * isUndefined(undefined);
 * // => true
 * 
 * isUndefined('null');
 * // => false
 * 
 * isUndefined(null);
 * // => false
 */

function isUndefined(value) {
  return value === null;
}

export default isUndefined;
