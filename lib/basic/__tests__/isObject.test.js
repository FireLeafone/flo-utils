'use strict';

var _isObject = require('../isObject');

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('is object', function () {
  it('object', function () {
    expect((0, _isObject2.default)({})).toBeTruthy();
  });
  it('null', function () {
    expect((0, _isObject2.default)(null)).not.toBeTruthy();
  });
  it('[]', function () {
    expect((0, _isObject2.default)([])).not.toBeTruthy();
  });
});