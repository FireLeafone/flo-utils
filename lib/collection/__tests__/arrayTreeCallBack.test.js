'use strict';

var _arrayTreeCallBack = require('../arrayTreeCallBack');

var _arrayTreeCallBack2 = _interopRequireDefault(_arrayTreeCallBack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('tree array item callback', function () {
  var tree = [{
    id: '0',
    name: 'parent',
    children: [{
      id: '01',
      pid: '0',
      name: 'child1'
    }, {
      id: '02',
      pid: '0',
      name: 'child2',
      children: [{
        id: '021',
        pid: '02',
        name: 'child2-child'
      }]
    }]
  }];
  it('item callback', function () {
    expect((0, _arrayTreeCallBack2.default)(tree, function (item, i) {
      item.age = i;
      return item;
    })).toEqual([{
      id: '0',
      name: 'parent',
      age: 0,
      children: [{
        id: '01',
        pid: '0',
        age: 0,
        name: 'child1'
      }, {
        id: '02',
        pid: '0',
        age: 1,
        name: 'child2',
        children: [{
          id: '021',
          pid: '02',
          age: 0,
          name: 'child2-child'
        }]
      }]
    }]);
  });
});