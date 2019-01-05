'use strict';

var _filterParams = require('../filterParams');

var _filterParams2 = _interopRequireDefault(_filterParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('filter empty params', function () {
  it('simple params filter', function () {
    var params = {
      id: 0,
      name: 'one',
      age: '',
      obj: { age: 10 },
      arr: [1],
      emptyA: [],
      emptyO: {}
    };
    expect((0, _filterParams2.default)(params)).toEqual({
      id: 0,
      name: 'one',
      obj: { age: 10 },
      arr: [1]
    });
  });
});