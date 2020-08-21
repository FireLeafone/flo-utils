import debounce from '../src/debounce';

describe('High frequency stabilization', () => {
  it('ajax promise debounce', (done) => {
    var debounceFunc = debounce((params) => {
      return new Promise((resolve) => {
        resolve(params);
      });
    }, 500);
    function ajaxFunc(params) {
      return new Promise((resolve) => {
        debounceFunc(params).then((res) => {
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
          expect(res).toBe(4);
          done();
        });
        n++;
      }, 100);
    }
    testClick();
  });
});
