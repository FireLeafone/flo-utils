import deepCopy from '../src/deepCopy';

const obj = {"name": 'a'};

const obj2 = {
  "name": 'a',
  "children": ['b', 'c']
};

const obj3 = {
  "name": 'a',
  "children": ['b', 'c'],
  "func": function () {
    console.log('a');
  }
};

describe('deep copy', () => {
  it('object deep copy', () => {
    expect(obj).toEqual(obj);
    expect(deepCopy(obj)).not.toBe(obj);
  });

  it('object array deep copy', () => {
    expect(obj2).toEqual(obj2);
    expect(deepCopy(obj2)).not.toBe(obj2);
  });

  it('object array function deep copy', () => {
    expect(obj3).toEqual(obj3);
    expect(deepCopy(obj3)).not.toBe(obj3);
  });
});
