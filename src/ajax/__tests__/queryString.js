import queryString from '../queryString';

describe('params to serialize', () => {
  it('params format', () => {
    const params = {
      id: 1,
      name: 'one',
      obj: {age: 10},
      arr: [1]
    };
    const result = 'id=1&name=one&obj=%7B%22age%22%3A10%7D&arr=%5B1%5D';
    expect(queryString(params)).toBe(result);
  });
});
