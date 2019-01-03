
/**
 *
 * @name extend, 对象扩展
 * @param {object} obj1
 * @param {object} obj2
 * @returns
 */
import isObject from '../basic/isObject';

function extend(obj1, obj2) {
  if (!isObject(obj1) || !isObject(obj2s)) {
    new Error('type is object');
    return false;
  }
  for(var key in obj2){
    if(obj1.hasOwnProperty(key)&&obj1[key])continue; // 有相同的属性则略过
    obj1[key]=obj2[key];
  }
  return obj1;
};

export default extend;