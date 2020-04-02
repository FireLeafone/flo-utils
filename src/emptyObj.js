/**
 * @name emptyObj 判断空对象
 * @param {*} obj
 * @returns
 */
import isObject from './isObject';

function emptyObj(obj) {
  if (!isObject(obj)) {
    new Error('type is object');
    return false;
  }
  for (var prop in obj){
    if(Object.prototype.hasOwnProperty.call(obj, prop))
    {
      return false;
    }
  }
  return true;
}

export default emptyObj;
