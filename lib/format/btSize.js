'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 *
 * @name btSize 容量置换 为 bt
 * @param {*} size
 * @returns
 */
function btSize(size) {
  var types = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  var k = 1024;
  if (typeof size == 'string') {
    var num = parseFloat(size);
    var unit = size.replace(num, '');
    var i = types.indexOf(unit.trim().toUpperCase());
    if (i < 0) {
      return 0;
    } else {
      return parseInt(num * Math.pow(k, i));
    }
  } else if (typeof size == 'number') {
    return size;
  }
  return 0;
}

exports.default = btSize;