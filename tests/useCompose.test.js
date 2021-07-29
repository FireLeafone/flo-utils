import useCompose from '../src/useCompose';

describe('useCompose test', () => {
  it('number compute', () => {
    const mockA = jest.fn((a) => a + 3);
    const mockB = jest.fn((a) => a - 1);
    const mockC = jest.fn((a) => a * 10);

    // 左 -> 右
    const foo = useCompose([mockA, mockB, mockC]);

    expect(foo(2)).toEqual(22);
    expect(mockA.mock.calls.length).toBe(1);
    expect(mockB.mock.calls.length).toBe(1);
    expect(mockC.mock.calls.length).toBe(1);
  });

  it('reverse run', () => {
    const mockA = jest.fn((a) => a + 3);
    const mockB = jest.fn((a) => a - 1);
    const mockC = jest.fn((a) => a * 10);

    // 顺序执行 左 -> 右
    const foo = useCompose([mockA, mockB, mockC], [], false);

    expect(foo(2)).toEqual(40);
    expect(mockA.mock.calls.length).toBe(1);
    expect(mockB.mock.calls.length).toBe(1);
    expect(mockC.mock.calls.length).toBe(1);
  });

  it('add hooks', () => {
    const mockA = jest.fn((a) => ({
      type: 'add',
      value: a + 3
    }));
    const mockB = jest.fn((a) => ({
      type: 'minus',
      value: a - 1
    }));
    const mockC = jest.fn((a) => ({
      type: 'multiply',
      value: a * 10
    }));

    const hook = jest.fn((a) => a.value);
    const foo = useCompose([mockA, mockB, mockC], [hook, hook, hook]);

    expect(foo(2)).toEqual(22);
    expect(hook.mock.calls.length).toBe(3);
    expect(mockA.mock.calls.length).toBe(1);
    expect(mockB.mock.calls.length).toBe(1);
    expect(mockC.mock.calls.length).toBe(1);
  });

  it("hoc option", () => {
    const mockA = jest.fn((a, b) => a + b);
    const mockB = jest.fn((a, b) => a - b);
    const mockC = jest.fn((a, b) => a * b);
    const hoc = jest.fn((fn, b) => (a) => fn(a, b));

    const foo = useCompose([
      hoc(mockA, 3),
      hoc(mockB, 1),
      hoc(mockC, 10)
    ]);

    expect(foo(2)).toEqual(22);
    expect(hoc.mock.calls.length).toBe(3);
    expect(mockA.mock.calls.length).toBe(1);
    expect(mockB.mock.calls.length).toBe(1);
    expect(mockC.mock.calls.length).toBe(1);
  });

});
