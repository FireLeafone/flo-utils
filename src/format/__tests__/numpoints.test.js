import numpoints from '../numpoints';

describe('number add points', () => {
  it('test number', () => {
    expect(numpoints('2019')).toBe('2,019');
  });
  it('test number size', () => {
    expect(numpoints('2019', 1)).toBe('2,019.0');
  });
});