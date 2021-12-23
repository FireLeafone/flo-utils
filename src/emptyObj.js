/**
 * @name emptyObj 判断空对象
 * @param {*} obj
 * @returns
 */
import isObject from './isObject';
import { consoleWran } from './warn/util';

function emptyObj(obj) {
  if (!isObject(obj)) {
    consoleWran('type is object');
    return false;
  }
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }
  }
  return true;
}

export default emptyObj;
