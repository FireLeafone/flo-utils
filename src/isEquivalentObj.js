/**
 *
 * @name isEquivalentObj， 对象判等
 * @param {object} a
 * @param {object} b
 */

import isObject from './isObject';

function isEquivalentObj(a, b) {
  if (!isObject(a) || !isObject(b)) {
    console.warn('type is object');
    return false;
  }
  // 获取对象属性的所有的键
  const aProps = Object.getOwnPropertyNames(a);
  const bProps = Object.getOwnPropertyNames(b);

  // 如果键的数量不同，那么两个对象内容也不同
  if (aProps.length !== bProps.length) {
    return false;
  }

  for (let i = 0, len = aProps.length; i < len; i += 1) {
    const propName = aProps[i];

    // 如果对应的值不同，那么对象内容也不同
    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  return true;
}

export default isEquivalentObj;
