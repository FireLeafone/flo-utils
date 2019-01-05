import isRepeatArray from '../isRepeatArray';

describe('check array is repeat', () => {
  it('number array', () => {
    expect(isRepeatArray([1, 1, 2])).toBeTruthy();
  });
  it('Duplicate properties in an array object', () => {
    expect(isRepeatArray([{name: 'sd', id: 1}, {name: 'sd2', id: 1}], 'id')).toBeTruthy();
  });
});