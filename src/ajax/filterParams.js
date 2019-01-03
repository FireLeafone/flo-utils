/**
 * @name filterParams, 过滤参数
 * @param {*} params
 * @returns
 */

import filter from '../collection/filter';

function filterParams (params) {
  const newParams = params ? filter(params, item => {
    if (typeof item === 'string') {
      const str = item.trim();
      if (!str) {
        return false;
      }
    }
    if (!item && item !== 0) {
      return false;
    }
    return true;
  }) : {};

  return newParams;
}

export default filterParams;
