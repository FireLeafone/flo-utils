import treeFilter from '../treeFilter';

describe('the collection filter', () => {
  const obj = [
    {
      age: 50,
      children: [
        {
          age: 30,
          children: [
            {
              age: 12
            },
            {
              age: 8
            }
          ]
        }
      ]
    }
  ];
  it('object filter', () => {
    expect(treeFilter(obj, 12, 'age')).toEqual([
      {
        age: 50,
        children: [
          {
            age: 30,
            children: [
              {
                age: 8
              }
            ]
          }
        ]
      }
    ]);
  });
});