/**
 * @name filterParams, 过滤参数
 * @param {*} params
 * @returns
 */

import filter from '../collection/filter';
import isObject from '../basic/isObject';
import isArray from '../basic/isArray';
import emptyObj from '../object/emptyObj';

function filterParams (params) {
  const newParams = params ? filter(params, item => {
    if (typeof item === 'string') {
      const str = item.trim();
      if (!str) {
        return false;
      }
    }
    else if (isArray(item)) {
      if (!item.length) {
        return false;
      }
    }
    else if (isObject(item)) {
      if (emptyObj(item)) {
        return false;
      }
    }
    else if (!item && item !== 0) {
      return false;
    }
    return true;
  }) : {};

  return newParams;
}

export default filterParams;
