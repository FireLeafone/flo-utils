'use strict';

var _isArray = require('../isArray');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('is array', function () {
  it('array', function () {
    expect((0, _isArray2.default)([1, 2, 3])).toBeTruthy();
  });
  it('string', function () {
    expect(!(0, _isArray2.default)('sds')).toBeTruthy();
  });
  it('link array ', function () {
    expect(!(0, _isArray2.default)(document.body.children)).toBeTruthy();
  });
});