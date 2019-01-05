'use strict';

var _uniqueArray = require('../uniqueArray');

var _uniqueArray2 = _interopRequireDefault(_uniqueArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('array unique', function () {
  it('number', function () {
    expect((0, _uniqueArray2.default)([1, 3, 3, 5])).toEqual([1, 3, 5]);
  });
  it('string', function () {
    expect((0, _uniqueArray2.default)(['sad', 'd', 'd'])).toEqual(['sad', 'd']);
  });
  it('object', function () {
    expect((0, _uniqueArray2.default)([{ name: 'a' }, { name: 'a' }, { name: 'b' }], 'name')).toEqual([{ name: 'a' }, { name: 'b' }]);
  });
});