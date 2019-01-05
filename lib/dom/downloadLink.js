'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @public
 * @name downloadLink
 * @param {string} url
 * @param {string} filename
 * @description 模拟下载
 */

var URL_REG = /^((https?|ftp|file):\/\/)?([\da-z\\.-]+)\.([a-z\\.]{2,6})([\\/\w \\.-]*)*\/?$/;

var downloadLink = exports.downloadLink = function downloadLink() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var filename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'file';

  if (!URL_REG.test(url)) {
    new Error('url is error');
    return;
  }
  var a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
};