/**
 *
 * @param {*} value 检查参数
 * @returns {boolean} 返回检查结果；`true`，则`value`是数组，否则不是
 * @example
 *
 * isArray([1, 2, 3]);
 *  => true
 *
 * isArray('abc');
 *  => false
 *
 * isArray(document.body.children);
 *  => false
 */

function isArray(arr) {
  if (!Array.isArray) {
    Array.isArray = (arg) => {
      return Object.prototype.toString.call(arg) === '[object Array]';
    };
  }
  return Array.isArray(arr);
}

export default isArray;
