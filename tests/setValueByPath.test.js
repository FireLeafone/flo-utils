import getValueByPath from '../src/getValueByPath';
import setValueByPath from '../src/setValueByPath';

function getTestData () {
  return [
    {
      id: '0',
      name: 'parent',
      children: [
        {
          id: '01',
          pid: '0',
          name: 'child1',
        },
        {
          id: '02',
          pid: '0',
          name: 'child2',
          children: [
            {
              id: '021',
              pid: '02',
              name: 'child2-child',
            },
          ],
        },
      ],
    },
  ];
}

describe('set value by keypath', () => {
  it('correct path', () => {
    const tree = getTestData();
    const trees = setValueByPath(tree, '0.children.1.children.0.name', 'child2-child-name')
    expect(getValueByPath(trees, '0.children.1.children.0.name')).toEqual(
      'child2-child-name',
    );
  });
  it('add path', () => {
    const tree = getTestData();
    const trees = setValueByPath(tree, '0.children.1.children.0.key', 'key')
    expect(getValueByPath(trees, '0.children.1.children.0.key')).toEqual(
      'key',
    );
  });
  it('err path', () => {
    const tree = getTestData();
    const trees = setValueByPath(tree, '0.children.1.children.1.key', 'key')
    expect(trees).toEqual(tree);
  });
  it('err path removeIfUndefined false', () => {
    const tree = getTestData();
    const trees = setValueByPath(tree, '0.children.1.children.1.key', 'key', false)
    expect(getValueByPath(trees, '0.children.1.children.1.key')).toEqual(
      'key',
    );
  });
  it('value undefined delete', () => {
    const tree = getTestData();
    const trees = setValueByPath(tree, '0.children.1.children.0.name')
    expect(getValueByPath(trees, '0.children.1.children.0.name')).toEqual(
      '-',
    );
  });
  it('null path', () => {
    const tree = getTestData();
    expect(setValueByPath(tree, '')).toEqual(tree);
  });
  it('null source', () => {
    expect(setValueByPath('', '0.children', 'null')).toEqual('');
  });
});
