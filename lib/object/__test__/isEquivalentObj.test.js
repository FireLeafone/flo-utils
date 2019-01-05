'use strict';

var _isEquivalentObj = require('../isEquivalentObj');

var _isEquivalentObj2 = _interopRequireDefault(_isEquivalentObj);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('check object empty', function () {
  it('same object', function () {
    var o1 = { a: 1, b: 2 };
    var o2 = { a: 1, b: 2 };
    expect((0, _isEquivalentObj2.default)(o1, o2)).toBeTruthy();
  });
  it('no same object', function () {
    var o1 = { a: 1, b: 2 };
    var o2 = { a: 1, b: 3 };
    expect((0, _isEquivalentObj2.default)(o1, o2)).not.toBeTruthy();
  });
  it('no same props object', function () {
    var o1 = { a: 1, b: 2 };
    var o2 = { a: 1 };
    expect((0, _isEquivalentObj2.default)(o1, o2)).not.toBeTruthy();
  });
});