/**
 * @name antFormFormat
 * @param {object} record
 * @returns {object}
 * @description 格式化antd-form回显数据
 */

import isObject from '../basic/isObject';

function antdFormFormat (record = {}) {
  if (!isObject(record)) {
    new Error ('param is object type');
    return;
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