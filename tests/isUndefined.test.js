import isUndefined from '../src/isUndefined';

describe('is undefined', () => {
  it('undefined', () => {
    expect(isUndefined(undefined)).toBeTruthy();
  });
  it('null', () => {
    expect(isUndefined(null)).not.toBeTruthy();
  });
});
