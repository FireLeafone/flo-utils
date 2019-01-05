'use strict';

var _isUndefined = require('../isUndefined');

var _isUndefined2 = _interopRequireDefault(_isUndefined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('is undefined', function () {
  it('undefined', function () {
    expect((0, _isUndefined2.default)(undefined)).toBeTruthy();
  });
  it('null', function () {
    expect((0, _isUndefined2.default)(null)).not.toBeTruthy();
  });
});