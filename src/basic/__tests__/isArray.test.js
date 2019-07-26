import isArray from '../isArray';

describe('is array', () => {
  it('array', () => {
    expect(isArray([1, 2, 3])).toBeTruthy();
  });
  it('string', () => {
    expect(isArray('sds')).toBeFalsy();
  });
  it('undefined', () => {
    expect(isArray()).toBeFalsy();
  });
  it('null', () => {
    expect(isArray(null)).toBeFalsy();
  });
  it('link array ', () => {
    expect(!isArray(document.body.children)).toBeTruthy();
  });
});