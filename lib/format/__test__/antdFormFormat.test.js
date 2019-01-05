'use strict';

var _antdFormFormat = require('../antdFormFormat');

var _antdFormFormat2 = _interopRequireDefault(_antdFormFormat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('antd form format', function () {
  it('object to value', function () {
    expect((0, _antdFormFormat2.default)({ name: 'ad', age: 12 })).toEqual({
      name: {
        value: 'ad'
      },
      age: {
        value: 12
      }
    });
  });
});