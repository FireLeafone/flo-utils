'use strict';

var _emptyObj = require('../emptyObj');

var _emptyObj2 = _interopRequireDefault(_emptyObj);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('check object empty', function () {
  it('empty object', function () {
    expect((0, _emptyObj2.default)({})).toBeTruthy();
  });
  it('no empty object', function () {
    expect((0, _emptyObj2.default)({ prop: 1 })).not.toBeTruthy();
  });
});