import btSize from '../src/btSize';

describe('memory size format', () => {
  it('number', () => {
    expect(btSize(1024)).toBe(1024);
  });
  it('KB', () => {
    expect(btSize('1024kb')).toBe(1024 * 1024);
  });
});
