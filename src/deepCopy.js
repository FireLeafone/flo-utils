/**
 * 支持基本类型 + function
 * 不支持环引用，symbol等
 * @name 深拷贝
 * @param {*} o
 * @returns
 */
function deepCopy (o) {
  if (o instanceof Array) {
    const n = [];
    for (let i = 0; i < o.length; ++i) {
      n[i] = deepCopy(o[i]);
    }
    return n;
  } else if (typeof o === 'function') {
    return o;
  } else if (o instanceof Object) {
    const n = {};
    let i;
    for (i in o) {
      n[i] = deepCopy(o[i]);
    }
    return n;
  } else {
    return o;
  }
}

export default deepCopy;
