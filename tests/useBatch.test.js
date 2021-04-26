import useBatch from '../src/useBatch';

describe('useBatch test', () => {
  it('base run', () => {
    const mockA = jest.fn((a, b) => a - b);
    const foo = useBatch(mockA);

    expect(foo([4, 2], 1)).toEqual([3, 1]);
    expect(mockA.mock.calls.length).toBe(2);
    expect(mockA.mock.calls[0][0]).toBe(4);
    expect(mockA.mock.calls[0][1]).toBe(1);
    expect(mockA.mock.calls[1][0]).toBe(2);
    expect(mockA.mock.calls[1][1]).toBe(1);
  });

  it('signle params', () => {
    const mockA = jest.fn((a, b) => a - b);
    const foo = useBatch(mockA);

    expect(foo(2, 10)).toEqual(-8);
    expect(mockA.mock.calls.length).toBe(1);
    expect(mockA.mock.calls[0][0]).toBe(2);
    expect(mockA.mock.calls[0][1]).toBe(10);
  });
});
