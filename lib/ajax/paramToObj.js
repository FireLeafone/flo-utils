'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/** 
 * @name paramToObj 参数序列化转对象
 * @param {any} paramsString 
 * @returns 
 */
function paramToObj(paramsString) {
  var search = paramsString;
  if (!search) {
    return {};
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
}

exports.default = paramToObj;