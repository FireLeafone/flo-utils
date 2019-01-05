import antdFormFormat from '../antdFormFormat';

describe('antd form format', () => {
  it('object to value', () => {
    expect(antdFormFormat({name: 'ad', age: 12})).toEqual({
      name: {
        value: 'ad'
      },
      age: {
        value: 12
      }
    });
  });
});