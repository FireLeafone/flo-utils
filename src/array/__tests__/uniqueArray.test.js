import uniqueArray from '../uniqueArray';

describe('array unique', () => {
  it('number', () => {
    expect(uniqueArray([1, 3, 3, 5])).toEqual([1, 3, 5]);
  });
  it('string', () => {
    expect(uniqueArray(['sad', 'd', 'd'])).toEqual(['sad', 'd']);
  });
  it('object', () => {
    expect(uniqueArray([{name: 'a'}, {name: 'a'}, {name: 'b'}], 'name')).toEqual([{name: 'a'}, {name: 'b'}]);
  });
});
