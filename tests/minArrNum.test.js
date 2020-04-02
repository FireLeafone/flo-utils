import minArrNum from '../src/minArrNum';

describe('array min number', () => {
  it('min number', () => {
    expect(minArrNum([1, 3, 5])).toBe(1);
  });
  it('err', () => {
    expect(minArrNum(['sad', 'd'])).toBe(NaN);
  });
  it('no array', () => {
    expect(minArrNum('sd')).toBe(NaN);
  });
});
