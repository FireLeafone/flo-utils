/**
 *
 * @name isEquivalentObj， 对象判等
 * @param {object} a
 * @param {object} b
 */

import isObject from '../basic/isObject';

function isEquivalentObj (a, b) {
  if (!isObject(a) || !isObject(b)) {
    new Error('type is object');
    return false;
  }
  // 获取对象属性的所有的键
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  // 如果键的数量不同，那么两个对象内容也不同
  if (aProps.length != bProps.length) {
    return false;
  }

  for (var i = 0, len = aProps.length; i < len; i++) {
    var propName = aProps[i];

    // 如果对应的值不同，那么对象内容也不同
    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  return true;
}

export default isEquivalentObj;