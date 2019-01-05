'use strict';

var _minArrNum = require('../minArrNum');

var _minArrNum2 = _interopRequireDefault(_minArrNum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('array min number', function () {
  it('min number', function () {
    expect((0, _minArrNum2.default)([1, 3, 5])).toBe(1);
  });
  it('err', function () {
    expect((0, _minArrNum2.default)(['sad', 'd'])).toBe(NaN);
  });
  it('no array', function () {
    expect((0, _minArrNum2.default)('sd')).toBe(NaN);
  });
});