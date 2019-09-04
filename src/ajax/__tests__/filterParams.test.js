import filterParams, {DEFAULT_VALUE} from '../filterParams';

describe('filter empty params', () => {
  it('simple params filter', () => {
    const params = {
      id: 0,
      name: 'one',
      age: '',
      null: null,
      obj: {age: 10},
      arr: [1],
      bol: true,
      emptyA: [],
      emptyO: {}
    };
    expect(filterParams(params)).toEqual({
      id: 0,
      name: 'one',
      obj: {age: 10},
      bol: true,
      arr: [1]
    });
  });
  it('empty param', () => {
    expect(filterParams()).toBe(DEFAULT_VALUE);
  });
});