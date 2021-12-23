/**
 * @name antFormFormat
 * @param {object} record
 * @returns {object}
 * @description 格式化antd-form回显数据
 */

import isObject from './isObject';
import { consoleWran } from './warn/util';

export const DEFAULT_VALUE = {};

function antdFormFormat(record = {}) {
  if (!isObject(record)) {
    consoleWran('param is object type');
    return DEFAULT_VALUE;
  }
  const keys = Object.keys(record);
  const obj = {};

  keys.forEach((key) => {
    obj[key] = {};
    obj[key].value = record[key];
  });
  return obj;
}

export default antdFormFormat;
