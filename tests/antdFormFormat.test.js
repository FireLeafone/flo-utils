import antdFormFormat, { DEFAULT_VALUE } from '../src/antdFormFormat';

describe('antd form format', () => {
  it('object to value', () => {
    expect(antdFormFormat({ name: 'ad', age: 12 })).toEqual({
      name: {
        value: 'ad',
      },
      age: {
        value: 12,
      },
    });
  });
  it('empty param', () => {
    expect(antdFormFormat('')).toBe(DEFAULT_VALUE);
  });
});
