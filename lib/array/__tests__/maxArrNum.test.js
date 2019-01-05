'use strict';

var _maxArrNum = require('../maxArrNum');

var _maxArrNum2 = _interopRequireDefault(_maxArrNum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('array max number', function () {
  it('max number', function () {
    expect((0, _maxArrNum2.default)([1, 3, 5])).toBe(5);
  });
  it('err', function () {
    expect((0, _maxArrNum2.default)(['sad', 'd'])).toBe(NaN);
  });
  it('no array', function () {
    expect((0, _maxArrNum2.default)('sd')).toBe(NaN);
  });
});