/*
 * @File: throttle.js
 * @Project: events-more-trigger
 * @File Created: Friday, 10th August 2018 2:07:45 pm
 * @Author: NARUTOne (wznaruto326@163.com/wznarutone326@gamil.com)
 * -----
 * @Last Modified: Friday, 10th August 2018 2:07:51 pm
 * @Modified By: NARUTOne (wznaruto326@163.com/wznarutone326@gamil.com>)
 * -----
 * @Copyright <<projectCreationYear>> - 2018 bairong, bairong
 * @fighting: code is far away from bug with the animal protecting
 *  ┏┓      ┏┓
 *  ┏┛┻━━━┛┻┓ 
 *  |           |
 *  |     ━    |
 *  |  ┳┛ ┗┳ |
 *  |          |
 *  |     ┻   |
 *  |           |
 *  ┗━┓     ┏━┛
 *     |      | 神兽保佑
 *     |      | 代码无BUG！！！
 *     |      ┗━━━┓
 *     |            ┣┓
 *     |            ┏┛
 *     ┗┓┓ ┏━┳┓┏┛
 *      |┫┫   |┫┫
 *      ┗┻┛   ┗┻┛
 */


/**
 * @name throttle, 节流函数，（高频操作，性能优化）
 * @param {*} func
 * @param {number} [wait = 300]
 * @returns
 * @example
 * 
 const throttleAjax = throttle((newParams)=>{
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
      throttleAjax(newParams).then(res => {
        resolve(res);
      });
    }
  });
}
 */

function throttle (func, wait = 300) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;
    return new Promise((resolve) => {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null;
          resolve(func.apply(context, args));
        }, wait);
      }
    });
  };
}

export default throttle;
