import paramToObj, { DEFAULT_VALUE } from '../src/paramToObj';

describe('param to object', () => {
  const sParams = 'id=1&name=one&obj=%7B%22age%22%3A10%7D&arr=%5B1%5D';
  it('serialize param', () => {
    expect(paramToObj(sParams)).toEqual({
      id: '1',
      name: 'one',
      obj: '{"age":10}',
      arr: '[1]',
    });
  });
  it('empty param', () => {
    expect(paramToObj()).toBe(DEFAULT_VALUE);
  });
});
