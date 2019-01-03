/**
 * @name queryString
 * @param {*} params
 * @returns {string}
 * @description 参数序列化
 */

import isObject from '../basic/isObject';
import isArray from '../basic/isArray';

function queryString (params) {
  let sendData = params;
  if (isObject(sendData)) {
    sendData = Object.assign({}, sendData);
    sendData = Object.keys(sendData).map(key => {
      let value = sendData[key];
      if (isArray(value) || isObject(value)) {
        value = JSON.stringify(value);
      }
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    }).join('&');
  } else {
    return new Error('params is object type');
  }

  return sendData;
}

export default queryString;