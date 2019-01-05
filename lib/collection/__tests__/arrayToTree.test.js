'use strict';

var _arrayToTree = require('../arrayToTree');

var _arrayToTree2 = _interopRequireDefault(_arrayToTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('array to tree', function () {
  it('draw array to tree', function () {
    var drawArr = [{
      id: '0',
      name: 'parent'
    }, {
      id: '01',
      pid: '0',
      name: 'child1'
    }, {
      id: '02',
      pid: '0',
      name: 'child2'
    }, {
      id: '021',
      pid: '02',
      name: 'child2-child'
    }];
    expect((0, _arrayToTree2.default)(drawArr, 'id', 'pid')).toEqual([{
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
    }]);
  });
});