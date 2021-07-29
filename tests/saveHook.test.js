import saveHook from '../src/saveHook';

const testObj = {
  'a': 1,
  'b': 2,
  'c': 3,
  'd': 4,
};

describe('saveHook test', () => {
  it('includes props', () => {
    expect(saveHook(testObj, ['a'])).toEqual(testObj);
    expect(saveHook(testObj, ['a'], false)).toEqual(testObj);
  });
  it('excludes props', () => {
    expect(saveHook(testObj, ['a'], true)).toEqual({'a': 1});
    expect(saveHook(testObj, [], ['b', 'd'])).toEqual({'a': 1, 'c': 3});
    expect(saveHook(testObj, ['a'], ['a', 'b', 'd'])).toEqual({'a': 1, 'c': 3});
  });

  it('save item array', () => {
    expect(saveHook([testObj, testObj], ['a'], true)).toEqual([{'a': 1}, {'a': 1}]);
    expect(saveHook([testObj], [], ['b', 'd'])).toEqual([{'a': 1, 'c': 3}]);
    expect(saveHook([testObj], ['a'], ['a', 'b', 'd'])).toEqual([{'a': 1, 'c': 3}]);
  });
});
