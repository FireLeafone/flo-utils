'use strict';

var _isNull = require('../isNull');

var _isNull2 = _interopRequireDefault(_isNull);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('is null', function () {
  it('null', function () {
    expect((0, _isNull2.default)(null)).toBeTruthy();
  });
  it('void 0', function () {
    expect((0, _isNull2.default)(void 0)).not.toBeTruthy();
  });
});