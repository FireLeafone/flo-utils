import addNums from '../src/addNums';

describe('number add accurate together', () => {
  it('adds 0.1 + 0.2 to not equal 0.3', () => {
    expect(0.1 + 0.2).not.toBe(0.3);
  });
  it('addNums 0.1 + 0.2 to equal 0.3', () => {
    expect(addNums(0.1, 0.2)).toBe('0.3');
  });
  it('addNums 32% + 20% to equal 52%', () => {
    expect(addNums('32%', '20%')).toBe('52%');
  });
});
