import usePartialHook from '../src/usePartialHook';

describe('usePartialHook test', () => {
  it('base run', () => {
    const mockA = jest.fn((a, b) => a - b);
    const foo = usePartialHook(mockA, [10]);

    expect(foo(2)).toEqual(8);
    expect(mockA.mock.calls.length).toBe(1);
    expect(mockA.mock.calls[0][0]).toBe(10);
    expect(mockA.mock.calls[0][1]).toBe(2);
  });

  it('reverse params', () => {
    const mockA = jest.fn((a, b) => a - b);
    const foo = usePartialHook(mockA, [10], true);

    expect(foo(2)).toEqual(-8);
    expect(mockA.mock.calls.length).toBe(1);
    expect(mockA.mock.calls[0][0]).toBe(2);
    expect(mockA.mock.calls[0][1]).toBe(10);
  });
});
