import useCurry from '../src/useCurry';

describe('useCurry test', () => {
  it('add number', () => {
    const mockA = jest.fn((a, b, c) => a + b + c);
    const foo = useCurry(mockA);
    const foo1 = useCurry(mockA);
    const foo2 = useCurry(mockA);
    const foo3 = useCurry(mockA);

    const s = foo(1)(2)(3);
    const s1 = foo1(1, 2)(3);
    const s2 = foo2(1)(2, 3);
    const s3 = foo3(1, 2, 3);

    expect(s).toEqual(6);
    expect(s1).toEqual(6);
    expect(s2).toEqual(6);
    expect(s3).toEqual(6);
    expect(mockA.mock.calls.length).toBe(4);
  });

  it('preset params', () => {
    const mockA = jest.fn((a, b, c) => a + b + c);
    const foo = useCurry(mockA, 1);
    const foo1 = useCurry(mockA, 1);

    const s = foo(2)(3);
    const s1 = foo1(2, 3);

    expect(s).toEqual(6);
    expect(s1).toEqual(6);
    expect(mockA.mock.calls.length).toBe(2);
  });

  it('placeholder params', () => {
    const mockA = jest.fn((a, b, c) => [a, b, c]);
    const foo = useCurry(mockA);

    const s = foo(1)("_", 3)(2);

    expect(s).toEqual([1, 2, 3]);
    expect(mockA.mock.calls.length).toBe(1);
  });
});
