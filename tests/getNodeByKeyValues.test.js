import getNodeByKeyValues, { DEFAULT_VALUE } from '../src/getNodeByKeyValues';

describe('get node by prop values', () => {
  it('get node', () => {
    expect(
      getNodeByKeyValues(
        [
          { name: 'ass' },
          { name: 'a', children: [{ name: 'ass', type: 'children' }] },
        ],
        ['ass'],
        'name',
      ),
    ).toEqual([{ name: 'ass' }, { name: 'ass', type: 'children' }]);
  });
  it('get node fn', () => {
    expect(
      getNodeByKeyValues(
        [
          { name: 'ass' },
          { name: 'a', children: [{ name: 'ass', type: 'children' }] },
        ],
        ['ass'],
        (node, vs) => {
          return vs.includes(node.name) && node.type === 'children';
        }
      ),
    ).toEqual([{ name: 'ass', type: 'children' }]);
  });
  it('empty param', () => {
    expect(getNodeByKeyValues([], '')).toBe(DEFAULT_VALUE);
  });
});
