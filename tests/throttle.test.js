import throttle from '../src/throttle';

describe('High frequency stabilization', () => {
  it('ajax promise throttle', (done) => {
    var throttleFunc = throttle((params) => {
      return new Promise((resolve) => {
        resolve(params);
      });
    }, 300);
    function ajaxFunc(params) {
      return new Promise((resolve) => {
        throttleFunc(params).then((res) => {
          resolve(res);
        });
      });
    }

    function testClick() {
      var n = 0;
      var time = null;
      time = setInterval(() => {
        if (n >= 5) {
          clearInterval(time);
          return;
        }
        ajaxFunc(n).then((res) => {
          expect(res).toBe(0); // 只执行第一次
          done();
        });
        n++;
      }, 100);
    }
    testClick();
  });
});
