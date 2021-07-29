import useComposeAsync from '../src/useComposeAsync';

describe('useComposeAsync test', () => {
  it('number compute', () => {
    const mockA = jest.fn((a) => new Promise((resolve) => resolve(a + 3)));
    const mockB = jest.fn((a) => new Promise((resolve) => resolve(a - 1)));
    const mockC = jest.fn((a) => new Promise((resolve) => resolve(a * 10)));

    // 左 -> 右
    const foo = useComposeAsync([mockA, mockB, mockC]);

    foo(2).then(res => expect(res).toEqual(22));
  });

  it('reverse run', () => {
    const mockA = jest.fn((a) => new Promise((resolve) => resolve(a + 3)));
    const mockB = jest.fn((a) => new Promise((resolve) => resolve(a - 1)));
    const mockC = jest.fn((a) => new Promise((resolve) => resolve(a * 10)));

    // 顺序执行 左 -> 右
    const foo = useComposeAsync([mockA, mockB, mockC], [], false);

    foo(2).then(res => expect(res).toEqual(40));
  });

  it('add hooks', () => {
    const mockA = jest.fn((a) => new Promise((resolve) => resolve({
      type: 'add',
      value: a + 3
    })));
    const mockB = jest.fn((a) => new Promise((resolve) => resolve({
      type: 'minus',
      value: a - 1
    })));
    const mockC = jest.fn((a) => new Promise((resolve) => resolve({
      type: 'multiply',
      value: a * 10
    })));

    const hook = jest.fn((a) => a.value);
    const foo = useComposeAsync([mockA, mockB, mockC], [hook, hook, hook]);

    foo(2).then(res => expect(res).toEqual(22));
  });
});
