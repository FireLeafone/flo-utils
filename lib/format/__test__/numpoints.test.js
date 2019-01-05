'use strict';

var _numpoints = require('../numpoints');

var _numpoints2 = _interopRequireDefault(_numpoints);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('number add points', function () {
  it('test number', function () {
    expect((0, _numpoints2.default)('2019')).toBe('2,019.00');
  });
  it('test number size', function () {
    expect((0, _numpoints2.default)('2019', 1)).toBe('2,019.0');
  });
});