'use strict';

var _paramToObj = require('../paramToObj');

var _paramToObj2 = _interopRequireDefault(_paramToObj);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('param to object', function () {
  var sParams = 'id=1&name=one&obj=%7B%22age%22%3A10%7D&arr=%5B1%5D';
  it('serialize param', function () {
    expect((0, _paramToObj2.default)(sParams)).toEqual({ id: "1", name: "one", obj: '{"age":10}', arr: "[1]" });
  });
});