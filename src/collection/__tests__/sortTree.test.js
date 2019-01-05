import sortTree from '../sortTree';

const nums = [1, 2, 5, 3];
const objA = [
  {
    age: 10
  },
  {
    age: 12,
    children: [
      {
        age: 8
      }, {
        age: 9
      }
    ]
  }
];

describe('tree data sort', () => {
  it('sort asc', () => {
    expect(sortTree(nums, 'asc')).toEqual([1, 2, 3, 5]);
  });
  it('sort object desc', () => {
    expect(sortTree(objA, 'desc', 'age')).toEqual([
      {
        age: 12,
        children: [
          {
            age: 9
          }, {
            age: 8
          }
        ]
      },
      {
        age: 10
      }
    ]);
  });
});