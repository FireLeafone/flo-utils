'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 *
 * @name 深拷贝
 * @param {*} o
 * @returns
 */
function deepCopy(o) {
  if (o instanceof Array) {
    var n = [];
    for (var i = 0; i < o.length; ++i) {
      n[i] = deepCopy(o[i]);
    }
    return n;
  } else if (typeof o === 'function') {
    return o;
  } else if (o instanceof Object) {
    var _n = {};
    var _i = void 0;
    for (_i in o) {
      _n[_i] = deepCopy(o[_i]);
    }
    return _n;
  } else {
    return o;
  }
}

exports.default = deepCopy;