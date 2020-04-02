import emptyObj from '../src/emptyObj';

describe('check object empty', () => {
  it('empty object', () => {
    expect(emptyObj({})).toBeTruthy();
  });
  it('no empty object', () => {
    expect(emptyObj({prop: 1})).not.toBeTruthy();
  });
  it('no object', () => {
    expect(emptyObj("")).not.toBeTruthy();
  });
});
