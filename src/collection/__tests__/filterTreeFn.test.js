import filterTreeFn from '../filterTreeFn';

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
    expect(filterTreeFn(obj, (item) => {
      return item.age > 18;
    })).toEqual([
      {
        age: 50,
        children: [
          {
            age: 30,
            children: []
          }
        ]
      }
    ]);
  });
});