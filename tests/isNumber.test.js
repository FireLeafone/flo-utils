import isNumber from '../src/isNumber';

describe('is number', () => {
  it('number', () => {
    expect(isNumber(3)).toBeTruthy();
  });
  it('Infinity', () => {
    expect(isNumber(Infinity)).toBeTruthy();
  });
  it('NaN', () => {
    expect(isNumber(NaN)).toBeTruthy();
  });
  it('string ', () => {
    expect(isNumber('2')).not.toBeTruthy();
  });
});
