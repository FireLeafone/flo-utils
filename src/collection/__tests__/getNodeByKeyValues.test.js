import getNodeByKeyValues from '../getNodeByKeyValues';

describe('get node by prop values', () => {
  it('get node', () => {
    expect(getNodeByKeyValues([{name: 'ass'}, {name: 'a', children: [{name: 'ass', type: 'children'}]}], ['ass'], 'name')).toEqual([
      {name: 'ass'}, {name: 'ass', type: 'children'}
    ]);
  });
});