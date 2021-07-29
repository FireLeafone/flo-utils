/**
 * @link https://github.com/lodash/lodash/blob/es/uniq.js
 * @description 去重
 */

import isObject from 'lodash/isObject';
import uniqBy from 'lodash/uniqBy';
import uniq from 'lodash/uniq';

function uniqueArray(arr, key) {
  if (arr.length) {
    if (isObject(arr[0])) {
      return key ? uniqBy(arr, key) : arr;
    }
    return uniq(arr);
  }
  return [];
}

export default uniqueArray;
