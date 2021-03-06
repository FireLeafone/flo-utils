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

function debounce(fn, step = 100) {
  let timeout = null;
  return (...args) => {
    clearTimeout(timeout);
    return new Promise((resolve) => {
      timeout = setTimeout(() => {
        resolve(fn.apply(this, args));
      }, step);
    });
  };
}

export default debounce;
