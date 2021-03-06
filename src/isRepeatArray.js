/**
 * @name isRepeatArray
 * @param {*} [arr=[]]
 * @param {string} [key='id']
 * @returns {boolean}
 */
import isArray from './isArray';
import isObject from './isObject';

function isRepeatArray(arr = [], key = 'key') {
  if (isArray(arr)) {
    const obj = {};
    for (let i = 0, length = arr.length; i < length; i += 1) {
      if (isObject(arr[i])) {
        obj[arr[i][key] || i] = i;
      } else {
        obj[arr[i]] = i;
      }
    }
    return arr.length !== Object.keys(obj).length;
  }
  return new Error('first params is array type');
}

export default isRepeatArray;
