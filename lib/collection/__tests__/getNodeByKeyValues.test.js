'use strict';

var _getNodeByKeyValues = require('../getNodeByKeyValues');

var _getNodeByKeyValues2 = _interopRequireDefault(_getNodeByKeyValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('get node by prop values', function () {
  it('get node', function () {
    expect((0, _getNodeByKeyValues2.default)([{ name: 'ass' }, { name: 'a', children: [{ name: 'ass', type: 'children' }] }], ['ass'], 'name')).toEqual([{ name: 'ass' }, { name: 'ass', type: 'children' }]);
  });
});