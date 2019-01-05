/**
 * @link https://github.com/lodash/lodash/blob/es/filter.js， 目前只支持数组类型过滤，需要对`arrayLink`进行过滤，使用_.filter()
 */

/**
 * @name filter, 数据过滤
 * @param {*} collection
 * @param {function} func return boolean
 */

import isArray from '../basic/isArray';
import isObject from '../basic/isObject';

function filter (collection, func) {
  let result = null;
  if (typeof func !== 'function') {
    return new Error('second param is object or array !');
  }
  if (isArray(collection)) {
    result = collection.filter((item, i) => func(item, i));
  } else if (isObject(collection)) {
    const keysArr = Object.keys(collection);
    const keysFilter = keysArr.filter(key => func(collection[key], key));

    result = {};
    for (const key of keysFilter) {
      let keyVal = collection[key];
      if (typeof keyVal === 'string') {
        keyVal = keyVal.trim();
      }
      result[key] = keyVal;
    }
  } else {
    return new Error('1st param is object or array !');
  }

  return result;
}

export default filter;