/**
 * 支持基本类型 + function
 * 不支持环引用，symbol等
 * @name 深拷贝
 * @param {*} o
 * @returns
 */
function deepCopy(o) {
  if (o instanceof Array) {
    const n = [];
    for (let i = 0; i < o.length; i += 1) {
      n[i] = deepCopy(o[i]);
    }
    return n;
  }
  if (typeof o === 'function') {
    return o;
  }
  if (o instanceof Object) {
    const n = {};
    for (const key in o) {
      if (Object.prototype.hasOwnProperty.call(o, key)) {
        n[key] = deepCopy(o[key]);
      }
    }
    return n;
  }
  return o;
}

export default deepCopy;
