import beNaN from '../beNaN';

describe('is NaN', () => {
  it('NaN', () => {
    expect(beNaN(NaN)).toBeTruthy();
  });
  it('undefined', () => {
    expect(beNaN(undefined)).not.toBeTruthy();
  });
});