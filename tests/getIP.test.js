import getIP from '../src/getIP';

describe('get ip callback', () => {
  it('mock callback', () => {
    const mockSuccessCallback = jest.fn((x) => console.log(x));
    getIP(mockSuccessCallback);

    // 此 mock 函数被调用了1次
    expect(mockSuccessCallback.mock.calls).toHaveLength(1);
  });
});
