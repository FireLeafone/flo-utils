import randomColor from '../randomColor';

describe('Random color', () => {
  it('16#', () => {
    expect(/^#[0-9a-fA-F]{6}$/.test(randomColor("16#"))).toBeTruthy();
  });
  it('rgba', () => {
    expect(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*[1]\)$/.test(randomColor("rgba", 1))).toBeTruthy();
  });
  it('hsla', () => {
    expect(/^hsla\((\d+),\s*100%,\s*50%,\s*[1]\)$/.test(randomColor("hsla", 1))).toBeTruthy();
  });
});