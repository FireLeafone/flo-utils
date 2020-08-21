# Collection

> 项目集合工具

## arrayToTree

> 扁平化数组格式转树状结构

- @param {\*} arr
- @param {string} [id="id"]
- @param {string} [pid="pid"]
- @param {string} [children="children"]

```js
const drawArr = [
  {
    id: '0',
    name: 'parent',
  },
  {
    id: '01',
    pid: '0',
    name: 'child1',
  },
  {
    id: '02',
    pid: '0',
    name: 'child2',
  },
  {
    id: '021',
    pid: '02',
    name: 'child2-child',
  },
];
arrayToTree(drawArr, 'id', 'pid');
/*
[{
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
}]
*/
```

## arrayTreeCallBack

> 树形数组节点 callback

- @param {any} treeNodes
- @param {any} Fn
- @param {any} options [children]

```json
{
  "childrenKeyName": "children",
  "traversal": "DLR" // LRD 后序遍历；DLR 前序遍历
}
```

```js
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
arrayTreeCallBack(tree, (item, i) => {
  item.age = i;
  return item;
}))
/*[
    {
      id: '0',
      name: 'parent',
      age: 0,
      children: [
        {
          id: '01',
          pid: '0',
          age: 0,
          name: 'child1'
        },
        {
          id: '02',
          pid: '0',
          age: 1,
          name: 'child2',
          children: [
            {
              id: '021',
              pid: '02',
              age: 0,
              name: 'child2-child'
            }
          ]
        }
      ]
    }
  ]*/
```

## deepCopy

> 深拷贝，基本类型+函数判断，复杂的请使用 lodash.cloneDeep

```js
deepCopy({});
```

## filter

> 扁平数据过滤，支持数组、对象

```js
filter([0, 1, 3, 5], (item, i) => item > 1 && i > 2); // 5

filter({ a: 2, b: 3, c: 5 }, (value, key) => value > 2 && key !== 'b'); // {c: 5}
```

## getNodeByKeyValues

> 根据`key` 匹配 `values`中的值，获取对应`node`集合

```js
getNodeByKeyValues(
  [
    { name: 'ass' },
    { name: 'a', children: [{ name: 'ass', type: 'children' }] },
  ],
  ['ass'],
  'name',
);
// => [{name: 'ass'}, {name: 'ass', type: 'children'}] // 打平返回
```

## sortTree

> 树形结构排序, 只针对 值为数字的排序

- @param {array} tree
- @param {String} sort
- @param {String} sortKey
- @param {String} childrenKey

```js
const nums = [1, 2, 5, 3];
const objA = [
  {
    age: 10,
  },
  {
    age: 12,
    children: [
      {
        age: 8,
      },
      {
        age: 9,
      },
    ],
  },
];

sortTree(nums, 'asc'); // [1, 2, 3, 5]
sortTree(objA, 'desc', 'age');
/*
[
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
]
*/
```

## filterTree

> 树形数据过滤

```js
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
filterTree(obj, 12, 'age');
/*
[
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
]
*/
```

## filterTreeFn

> 树形数据过滤

```js
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
filterTreeFn(obj, (item) => item.age == 12);
/*
[
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
]
*/
```

## getValueByPath

> 通过路径获取数据

- @param {any} obj
- @param {any} props a.b.c.d
- @param {string} [defaultValue=""]

```js
const tree = [
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
getValueByPath('0.children.1.children.0.name'); // child2-child
```
