'use strict';

var _beNaN = require('../beNaN');

var _beNaN2 = _interopRequireDefault(_beNaN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('is NaN', function () {
  it('NaN', function () {
    expect((0, _beNaN2.default)(NaN)).toBeTruthy();
  });
  it('undefined', function () {
    expect((0, _beNaN2.default)(undefined)).not.toBeTruthy();
  });
});