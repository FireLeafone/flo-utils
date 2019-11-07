import getValueByPath from '../getValueByPath';

describe('get value by keypath', () => {
  const tree = [{
    id: '0',
    name: 'parent',
    children: [
      {
        id: '01',
        pid: '0',
        name: 'child1'
      },
      {
        id: '02',
        pid: '0',
        name: 'child2',
        children: [
          {
            id: '021',
            pid: '02',
            name: 'child2-child'
          }
        ]
      }
    ]
  }];
  it('correct path', () => {
    expect(getValueByPath(tree, "0.children.1.children.0.name")).toEqual("child2-child");
  });
  it('error path', () => {
    expect(getValueByPath(tree, "0.children.1.children.0.key", "null")).toEqual("null");
  });
  it('null path', () => {
    expect(getValueByPath(tree, "")).toEqual(tree);
  });
  it('null source', () => {
    expect(getValueByPath("", "0.children", "null")).toEqual("null");
  });
});