'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formatDate = function formatDate(date) {
  var rule = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD';

  if (!date) return;
  if (typeof date === 'string') {
    date = date.trim();
  }
  var text = (0, _moment2.default)(date).format(rule);
  return text === 'Invalid date' ? date : text;
}; /**
    * @public
    * @name formatDate
    * @param {date}
    * @param {string} rule 格式
    * @return {string}
    * @description 时间格式化
    * @example
    * 
    * formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss');
    * => '2019-01-02 20:26:00' // 举例
    * 
    * formatDate('20190101');
    * => '20190101'
    */

exports.default = formatDate;