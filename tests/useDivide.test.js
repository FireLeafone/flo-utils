import useDivide from '../src/useDivide';

describe('useDivide test', () => {
  it('base run', () => {
    const mockA = jest.fn((a) => a + 1);
    const foo = useDivide([{key: 2, hook: mockA}]);

    expect(foo([0, 1, 2, 3])).toEqual([0, 1, 3, 3]);
    expect(mockA.mock.calls.length).toBe(1);
    expect(mockA.mock.calls[0][0]).toBe(2);
  });

  it('divide all params', () => {
    const mockA = jest.fn((a) => a + 1);
    const mockB = jest.fn((a) => a - 1);
    const foo = useDivide([{key: 2, hook: mockB}], mockA);

    expect(foo([0, 1, 2, 3])).toEqual([1, 2, 1, 4]);
    expect(mockA.mock.calls.length).toBe(3);
    expect(mockB.mock.calls.length).toBe(1);
    expect(mockB.mock.calls[0][0]).toBe(2);
  });

  it('object divide', () => {
    const mockA = jest.fn((a) => a + 1);
    const mockB = jest.fn((a) => a - 1);
    const foo = useDivide([{key: 'b', hook: mockB}], mockA);

    expect(foo({
      "a": 3,
      "b": 3,
      "c": 3,
    })).toEqual({
      "a": 4,
      "b": 2,
      "c": 4,
    });
    expect(mockA.mock.calls.length).toBe(2);
    expect(mockB.mock.calls.length).toBe(1);
    expect(mockB.mock.calls[0][0]).toBe(3);
  });
});
