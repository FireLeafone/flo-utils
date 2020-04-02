import isLength from '../src/isLength';

describe('is length', () => {
  it('number', () => {
    expect(isLength(3)).toBeTruthy();
  });
  it('Number.MIN_VALUE', () => {
    expect(isLength(Number.MIN_VALUE)).not.toBeTruthy();
  });
  it('string', () => {
    expect(isLength('3')).not.toBeTruthy();
  });
});
