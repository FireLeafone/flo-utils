import unBindAntdForm from '../src/unBindAntdForm';

describe('antd form format', () => {
  it('value to key', () => {
    expect(unBindAntdForm({
      name: {
        value: 'ad'
      },
      age: {
        value: 12
      }
    })).toEqual({name: 'ad', age: 12});
  });
});
