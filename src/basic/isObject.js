/**
 * @param {*} value 检查参数
 * @returns {boolean} 返回检查结果；`true`，则`value`是对象，否则不是
 * @example
 * 
 * isObject({});
 * // => true
 * 
 * isObject([]);
 * // => false
 * 
 * isObject(null);
 * // => false
 */

function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

export default isObject;
