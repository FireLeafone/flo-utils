/**
 * @link https://github.com/lodash/lodash/blob/es/filter.js， 目前只支持数组类型过滤，需要对`arrayLink`进行过滤，使用_.filter()
 */

/**
 * @name filter, 扁平数据过滤
 * @param {*} collection
 * @param {function} func return boolean
 */

import isArray from './isArray';
import isObject from './isObject';
import { consoleWran } from './warn/util';

function filter(collection, func) {
  let result = null;
  if (typeof func !== 'function') {
    consoleWran('second param is object or array !');
    return [];
  }
  if (isArray(collection)) {
    result = collection.filter((item, i) => func(item, i));
  } else if (isObject(collection)) {
    const keysArr = Object.keys(collection);
    const keysFilter = keysArr.filter((key) => func(collection[key], key));

    result = {};
    for (const key of keysFilter) {
      let keyVal = collection[key];
      if (typeof keyVal === 'string') {
        keyVal = keyVal.trim();
      }
      result[key] = keyVal;
    }
  } else {
    consoleWran('1st param is object or array !');
    return [];
  }

  return result;
}

export default filter;
