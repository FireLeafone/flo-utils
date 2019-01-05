import isString from '../isString';

describe('is string', () => {
  it('string', () => {
    expect(isString('2')).toBeTruthy();
  });
  it('number', () => {
    expect(isString(2)).not.toBeTruthy();
  });
});
