import sortTree, {DEFAULT_VALUE} from '../src/sortTree';

const nums = [1, 2, 5, 3];
const strs = ["a", "b", "d", "c"];
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
      }, {
        age: 0
      }
    ]
  }
];

describe('tree data sort', () => {
  it('empty param', () => {
    expect(sortTree({}, (item) => item)).toBe(DEFAULT_VALUE);
  });
  it('sort asc', () => {
    expect(sortTree(nums, 'asc')).toEqual([1, 2, 3, 5]);
  });
  it('sort strng asc', () => {
    expect(sortTree(strs, 'asc')).toEqual(["a", "b", "d", "c"]);
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
          }, {
            age: 0
          }
        ]
      },
      {
        age: 10
      }
    ]);
  });
});
