'use strict';

var _isNumber = require('../isNumber');

var _isNumber2 = _interopRequireDefault(_isNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('is number', function () {
  it('number', function () {
    expect((0, _isNumber2.default)(3)).toBeTruthy();
  });
  it('Infinity', function () {
    expect((0, _isNumber2.default)(Infinity)).toBeTruthy();
  });
  it('NaN', function () {
    expect((0, _isNumber2.default)(NaN)).toBeTruthy();
  });
  it('string ', function () {
    expect((0, _isNumber2.default)('2')).not.toBeTruthy();
  });
});