import throttle from '../throttle';

describe('High frequency stabilization', () => {
  it('ajax promise throttle', (done) => {
    var throttleFunc = throttle((params) => {
      return new Promise((resolve) => {
        resolve(params);
      });
    }, 500);
    function ajaxFunc(params) {
      return new Promise((resolve) => {
        throttleFunc(params).then(res => {
          resolve(res);
        });
      });
    }

    function testClick () {
      var n = 0;
      var time = null;
      time = setInterval(() => {
        if (n >=5) {
          clearInterval(time);
          return;
        }
        ajaxFunc(n).then(res => {
          expect(res).toBe(4);
          done();
        });
        n++;
      }, 100);
    }
    testClick();
  });
});