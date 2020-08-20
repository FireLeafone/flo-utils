/**
 * @param {*} value 检查参数
 * @returns {boolean} 返回检查结果；`true`，则`value`是length，否则不是
 * @example
 *
 * isLength(3);
 * // => true
 *
 * isLength(Number.MIN_VALUE);
 * // => false
 *
 * isLength('3');
 * // => false
 */

// Number.MAX_SAFE_INTEGER
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;

function isLength(value) {
  return (
    typeof value === 'number' &&
    value > -1 &&
    value % 1 === 0 &&
    value <= MAX_SAFE_INTEGER
  );
}

export default isLength;
