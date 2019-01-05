"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @name arrayToTree, 扁平化数组格式转树状结构
 * @param {*} arr
 * @param {string} [id="id"]
 * @param {string} [pid="pid"]
 * @param {string} [children="children"]
 */
function arrayToTree(arr) {
  var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "id";
  var pid = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "pid";
  var children = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "children";

  var data = [].concat(arr);
  var result = [];
  var hash = {};
  data.forEach(function (item, index) {
    hash[data[index][id]] = item;
  });

  data.forEach(function (item) {
    var hashVP = hash[item[pid]]; // 获取的实质还是data下的对象
    if (hashVP) {
      !hashVP[children] && (hashVP[children] = []);
      hashVP[children].push(item);
    } else {
      result.push(item);
    }
  });
  return result;
}

exports.default = arrayToTree;