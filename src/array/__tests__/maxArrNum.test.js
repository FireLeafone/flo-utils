import maxArrNum from '../maxArrNum';

describe('array max number', () => {
  it('max number', () => {
    expect(maxArrNum([1, 3, 5])).toBe(5);
  });
  it('err', () => {
    expect(maxArrNum(['sad', 'd'])).toBe(NaN);
  });
  it('no array', () => {
    expect(maxArrNum('sd')).toBe(NaN);
  });
});
