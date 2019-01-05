import isArray from '../isArray';

describe('is array', () => {
  it('array', () => {
    expect(isArray([1, 2, 3])).toBeTruthy();
  });
  it('string', () => {
    expect(!isArray('sds')).toBeTruthy();
  });
  it('link array ', () => {
    expect(!isArray(document.body.children)).toBeTruthy();
  });
});