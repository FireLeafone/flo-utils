/**
 * @name isRepeatArray
 * @param {*} [arr=[]]
 * @param {string} [key='id']
 * @returns {boolean}
 */
import isArray from '../basic/isArray';
import isObject from '../basic/isObject';

function isRepeatArray (arr = [], key = 'key') {
  if (isArray(arr)) {
    const obj = {};
    for ( let i = 0, length = arr.length; i < length ; i++) {
      if(isObject(arr[i])) {
        obj[(arr[i][key] || i)] = i;
      } else {
        obj[arr[i]] = i;
      }
    }
    return arr.length !== Object.keys(obj).length;
  } else {
    return new Error('first params is array type');
  }
}

export default isRepeatArray;
