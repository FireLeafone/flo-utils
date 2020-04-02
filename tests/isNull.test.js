import isNull from '../src/isNull';

describe('is null', () => {
  it('null', () => {
    expect(isNull(null)).toBeTruthy();
  });
  it('void 0', () => {
    expect(isNull(void 0)).not.toBeTruthy();
  });
});
