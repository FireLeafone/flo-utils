import isObject from '../isObject';

describe('is object', () => {
  it('object', () => {
    expect(isObject({})).toBeTruthy();
  });
  it('null', () => {
    expect(isObject(null)).not.toBeTruthy();
  });
  it('[]', () => {
    expect(isObject([])).not.toBeTruthy();
  });
});
