import arrayToTree from '../src/arrayToTree';

describe('array to tree', () => {
  it('draw array to tree', () => {
    const drawArr = [
      {
        id: '0',
        name: 'parent'
      },
      {
        id: '01',
        pid: '0',
        name: 'child1'
      },
      {
        id: '02',
        pid: '0',
        name: 'child2'
      },
      {
        id: '021',
        pid: '02',
        name: 'child2-child'
      }
    ];
    expect(arrayToTree(drawArr, 'id', 'pid')).toEqual([{
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
    }]);
  });
});
