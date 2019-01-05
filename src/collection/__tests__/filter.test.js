import filter from '../filter';

describe('the collection filter', () => {
  it('array filter', () => {
    expect(filter([0, 1, 3, 5], (item, i) => item > 1 && i > 2)).toEqual([5]);
  });

  it('object filter', () => {
    expect(filter({a: 2, b: 3, c: 5}, (value, key) => value > 2 && key!== 'b')).toEqual({c: 5});
  });
});