import filterParams, {DEFAULT_VALUE} from '../filterParams';

describe('filter empty params', () => {
  it('simple params filter', () => {
    const params = {
      id: 0,
      name: 'one',
      age: '',
      obj: {age: 10},
      arr: [1],
      emptyA: [],
      emptyO: {}
    };
    expect(filterParams(params)).toEqual({
      id: 0,
      name: 'one',
      obj: {age: 10},
      arr: [1]
    });
  });
  it('empty param', () => {
    expect(filterParams()).toBe(DEFAULT_VALUE);
  });
});