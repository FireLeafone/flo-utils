/**
 * @name filterParams, 过滤参数
 * @param {*} params
 * @returns
 */

import filter from './filter';
import isObject from './isObject';
import isArray from './isArray';
import emptyObj from './emptyObj';

export const DEFAULT_VALUE = {};

function filterParams(params) {
  const newParams = params
    ? filter(params, (item) => {
        if (typeof item === 'string') {
          const str = item.trim();
          if (!str) {
            return false;
          }
        } else if (isArray(item)) {
          if (!item.length) {
            return false;
          }
        } else if (isObject(item)) {
          if (emptyObj(item)) {
            return false;
          }
        } else if (typeof item === 'boolean') {
          return true;
        } else if (!item && item !== 0) {
          return false;
        }
        return true;
      })
    : DEFAULT_VALUE;

  return newParams;
}

export default filterParams;
