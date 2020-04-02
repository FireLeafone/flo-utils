/**
 * @name unBindAntdForm
 * @param {object} formData
 * @returns {object}
 * @description 格式化antd-form保存数据
 */

import isObject from './isObject';

function unBindAntdForm (formData = {}) {
  if (!isObject(formData)) {
    new Error ('param is object type');
    return;
  }
  const keys = Object.keys(formData);
  const obj = {};

  keys.forEach((key) => {
    obj[key] = formData[key].value;
  });
  return obj;
}

export default unBindAntdForm;
