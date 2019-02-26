import rgbToHex from '../rgbToHex';

describe('rgb to hex', () => {
  it('rgb(0, 0, 0) to #000000', () => {
    expect(rgbToHex('rgb(0, 0, 0)')).toBe('#000000');
  });
  it('rgb(255, 182, 193) to #FFB6C1', () => {
    expect(rgbToHex('rgb(255, 182, 193)')).toBe('#FFB6C1');
  });
});