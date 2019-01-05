'use strict';

var _filter = require('../filter');

var _filter2 = _interopRequireDefault(_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('the collection filter', function () {
  it('array filter', function () {
    expect((0, _filter2.default)([0, 1, 3, 5], function (item, i) {
      return item > 1 && i > 2;
    })).toEqual([5]);
  });

  it('object filter', function () {
    expect((0, _filter2.default)({ a: 2, b: 3, c: 5 }, function (value, key) {
      return value > 2 && key !== 'b';
    })).toEqual({ c: 5 });
  });
});