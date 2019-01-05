import emptyObj from '../emptyObj';

describe('check object empty', () => {
  it('empty object', () => {
    expect(emptyObj({})).toBeTruthy();
  });
  it('no empty object', () => {
    expect(emptyObj({prop: 1})).not.toBeTruthy();
  });
});