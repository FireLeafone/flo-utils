'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _debounce = require('../debounce');

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('High frequency stabilization', function () {
  it('ajax promise debounce', function (done) {
    var debounceFunc = (0, _debounce2.default)(function (params) {
      return new _promise2.default(function (resolve) {
        resolve(params);
      });
    }, 500);
    function ajaxFunc(params) {
      return new _promise2.default(function (resolve) {
        debounceFunc(params).then(function (res) {
          resolve(res);
        });
      });
    }

    function testClick() {
      var n = 0;
      var time = null;
      time = setInterval(function () {
        if (n >= 5) {
          clearInterval(time);
          return;
        }
        ajaxFunc(n).then(function (res) {
          expect(res).toBe(4);
          done();
        });
        n++;
      }, 100);
    }
    testClick();
  });
});