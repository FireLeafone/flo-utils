import isEquivalentObj from '../src/isEquivalentObj';

describe('check object empty', () => {
  it('same object', () => {
    const o1 = { a: 1, b: 2 };
    const o2 = { a: 1, b: 2 };
    expect(isEquivalentObj(o1, o2)).toBeTruthy();
  });
  it('no same object', () => {
    const o1 = { a: 1, b: 2 };
    const o2 = { a: 1, b: 3 };
    expect(isEquivalentObj(o1, o2)).not.toBeTruthy();
  });
  it('no same props object', () => {
    const o1 = { a: 1, b: 2 };
    const o2 = { a: 1 };
    expect(isEquivalentObj(o1, o2)).not.toBeTruthy();
  });
});
