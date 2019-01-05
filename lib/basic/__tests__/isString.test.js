'use strict';

var _isString = require('../isString');

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('is string', function () {
  it('string', function () {
    expect((0, _isString2.default)('2')).toBeTruthy();
  });
  it('number', function () {
    expect((0, _isString2.default)(2)).not.toBeTruthy();
  });
});