/**
 * @link https://github.com/lodash/lodash/blob/es/uniq.js
 * @description 去重
 */

import _ from 'lodash';

function uniqueArray(arr, key) {
  if (arr.length) {
    if (_.isObject(arr[0])) {
      return key ? _.uniqBy(arr, key) : arr;
    } else {
      return _.uniq(arr);
    }
  }
  return [];
}

export default uniqueArray;