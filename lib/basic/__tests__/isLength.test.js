'use strict';

var _isLength = require('../isLength');

var _isLength2 = _interopRequireDefault(_isLength);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('is length', function () {
  it('number', function () {
    expect((0, _isLength2.default)(3)).toBeTruthy();
  });
  it('Number.MIN_VALUE', function () {
    expect((0, _isLength2.default)(Number.MIN_VALUE)).not.toBeTruthy();
  });
  it('string', function () {
    expect((0, _isLength2.default)('3')).not.toBeTruthy();
  });
});