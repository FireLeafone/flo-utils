"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name debounce, 防抖函数，（高频操作，性能优化）
 * @param {*} fn
 * @param {number} [step=100]
 * @returns
 * @example
 * 
 const debounceAjax = debounce((newParams)=>{
  return new Promise((resolve, reject) => {
    xhr({
      url: '/api',
      type: 'POST',
      data: newParams,
      success: res => {
        const {data} = res;
        const arr = isArray(data) ? data : [];
        resolve(arr);
      },
      error: err => {
        reject(err);
      }
    });
  });
}, 300);

export function apiExample (params) {
  const newParams = filterParams(params);
  return new Promise((resolve) => {
    const keys = Object.keys(newParams);
    if (!keys.length) {
      resolve([]);
    } else {
      debounceAjax(newParams).then(res => {
        resolve(res);
      });
    }
  });
}
 */

function debounce(fn) {
  var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

  var timeout = null;
  return function () {
    var _this = this,
        _arguments = arguments;

    clearTimeout(timeout);
    return new _promise2.default(function (resolve) {
      timeout = setTimeout(function () {
        resolve(fn.apply(_this, _arguments));
      }, step);
    });
  };
}

exports.default = debounce;