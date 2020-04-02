import hexToRgb from '../src/hexToRgb';

describe('hex to rgb', () => {
  it('#000 to rgb(0, 0, 0)', () => {
    expect(hexToRgb('#000', 0.6)).toBe('rgba(0, 0, 0, 0.6)');
  });
  it('#FFB6C1 to rgb(255, 182, 193)', () => {
    expect(hexToRgb('#FFB6C1')).toBe('rgba(255, 182, 193, 0.8)');
  });
});
