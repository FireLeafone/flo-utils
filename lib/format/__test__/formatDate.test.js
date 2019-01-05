'use strict';

var _formatDate = require('../formatDate');

var _formatDate2 = _interopRequireDefault(_formatDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();

function addLength(n) {
  n = n + '';
  if (n.length < 2) {
    return '0' + n;
  }
  return n;
}

describe('format date', function () {
  it('default format', function () {
    var result = year + '-' + addLength(month) + '-' + addLength(day);
    expect((0, _formatDate2.default)(date)).toBe(result);
  });
  it('format', function () {
    var result = year + '/' + addLength(month) + '/' + addLength(day);
    expect((0, _formatDate2.default)(date, 'YYYY/MM/DD')).toBe(result);
  });
});