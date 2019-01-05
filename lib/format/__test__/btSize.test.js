'use strict';

var _btSize = require('../btSize');

var _btSize2 = _interopRequireDefault(_btSize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('memory size format', function () {
  it('number', function () {
    expect((0, _btSize2.default)(1024)).toBe(1024);
  });
  it('KB', function () {
    expect((0, _btSize2.default)('1024kb')).toBe(1024 * 1024);
  });
});