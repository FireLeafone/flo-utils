'use strict';

var _isRepeatArray = require('../isRepeatArray');

var _isRepeatArray2 = _interopRequireDefault(_isRepeatArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('check array is repeat', function () {
  it('number array', function () {
    expect((0, _isRepeatArray2.default)([1, 1, 2])).toBeTruthy();
  });
  it('Duplicate properties in an array object', function () {
    expect((0, _isRepeatArray2.default)([{ name: 'sd', id: 1 }, { name: 'sd2', id: 1 }], 'id')).toBeTruthy();
  });
});