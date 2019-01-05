'use strict';

var _queryString = require('../queryString');

var _queryString2 = _interopRequireDefault(_queryString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('params to serialize', function () {
  it('params format', function () {
    var params = {
      id: 1,
      name: 'one',
      obj: { age: 10 },
      arr: [1]
    };
    var result = 'id=1&name=one&obj=%7B%22age%22%3A10%7D&arr=%5B1%5D';
    expect((0, _queryString2.default)(params)).toBe(result);
  });
});