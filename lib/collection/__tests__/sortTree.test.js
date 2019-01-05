'use strict';

var _sortTree = require('../sortTree');

var _sortTree2 = _interopRequireDefault(_sortTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nums = [1, 2, 5, 3];
var objA = [{
  age: 10
}, {
  age: 12,
  children: [{
    age: 8
  }, {
    age: 9
  }]
}];

describe('tree data sort', function () {
  it('sort asc', function () {
    expect((0, _sortTree2.default)(nums, 'asc')).toEqual([1, 2, 3, 5]);
  });
  it('sort object desc', function () {
    expect((0, _sortTree2.default)(objA, 'desc', 'age')).toEqual([{
      age: 12,
      children: [{
        age: 9
      }, {
        age: 8
      }]
    }, {
      age: 10
    }]);
  });
});