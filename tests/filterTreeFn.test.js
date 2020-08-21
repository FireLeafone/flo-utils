import filterTreeFn, { DEFAULT_VALUE } from '../src/filterTreeFn';

describe('the collection filter', () => {
  const obj = [
    {
      age: 50,
      children: [
        {
          age: 30,
          children: [
            {
              age: 12,
            },
            {
              age: 8,
            },
          ],
        },
      ],
    },
  ];
  it('empty param', () => {
    const expected = DEFAULT_VALUE;
    expect(filterTreeFn({}, (item) => item)).toBe(expected);
  });
  it('object filter', () => {
    expect(
      filterTreeFn(obj, (item) => {
        return item.age > 18;
      }),
    ).toEqual([
      {
        age: 50,
        children: [
          {
            age: 30,
            children: [],
          },
        ],
      },
    ]);
  });
});
