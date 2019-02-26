import hexToRgb from '../hexToRgb';

describe('hex to rgb', () => {
  it('#000 to rgb(0, 0, 0)', () => {
    expect(hexToRgb('#000')).toBe('rgb(0, 0, 0)');
  });
  it('#FFB6C1 to rgb(255, 182, 193)', () => {
    expect(hexToRgb('#FFB6C1')).toBe('rgb(255, 182, 193)');
  });
});