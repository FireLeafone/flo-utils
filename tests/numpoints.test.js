import numpoints from '../src/numpoints';

describe('number add points', () => {
  it('test number', () => {
    expect(numpoints('2019.12')).toBe('2,019.12');
  });
  it('test number 0', () => {
    expect(numpoints('2019.12', 0)).toBe('2,019');
  });
  it('test number size', () => {
    expect(numpoints('2019', 1)).toBe('2,019.0');
  });
  it('not number', () => {
    expect(numpoints('sa', 1)).toBe('sa');
  });
});
