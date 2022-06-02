# util

> 工具集

## useCompose

> 函数式编程 `compose` 类似于 pipe管道

数据操作集合成加工 A => B => C: `useCompose([C, B, A])(data)`

- @name useCompose
- @param {array} [middlewares] 操作集
- @param {array} [hooks] 操作额外钩子
- @param {boolean} [isReverse] 是否翻转操作，默认true

```js
useCompose(
  [
    console.log,
    partial(add, 10),
    partial(pow, 3),
    partial(multiply, 5)
  ]
)(2); // 1010
```

## useComposeAsync

> 函数式处理异步promise函数

数据操作集合成加工 A => B => C: `useComposeAsync([C, B, A])(data)`

- @name useComposeAsync
- @param {array} [middlewares] 异步操作集
- @param {array} [hooks] 操作额外钩子
- @param {boolean} [isReverse] 是否翻转操作，默认true

```js
const mockA = (a) => new Promise((resolve) => resolve(a + 3));
const mockB = (a) => new Promise((resolve) => resolve(a - 1));
const mockC = (a) => new Promise((resolve) => resolve(a * 10));
useComposeAsync(
  [mockA, mockB, mockC]
)(2).then(res => console.log(res)); // 1010
```

## useCurry

> 函数式编程 `curry`

- @name useCurry
- @param {function} [targetfn] 执行函数
- @param {arguments} [args] 预设参数
- @placeholder {string} 预设占位符 '_'

```js
var abc = function(a, b, c) {
  return [a, b, c];
};

var curried = useCurry(abc);

curried(1)(2)(3);
// => [1, 2, 3]

curried(1, 2)(3);
// => [1, 2, 3]

curried(1, 2, 3);
// => [1, 2, 3]

// Curried with placeholders.
curried(1)(_, 3)(2);
// => [1, 2, 3]
```

## usePartialHooks

> 函数参数处理钩子 (偏函数)

- @name usePartialHooks
- @param {function} [fn] 操作集
- @param {array} [presetArgs] 预设参数
- @param {boolean} [isReverse] 是否翻转操作，默认false

```js
const mockA = (a, b) => a - b;
const foo = usePartialHook(mockA, [10], true);

foo(2); // -8
```

## useDivide

> 数据分而治之，汇总输出; 支持数组、对象

- @name useDivide
- @param {*} [hooks=[]]

```js
[{
  key: string|number,
  hook: v => dv
}]
```

- @param {*} [divide=(v) => v]

```js
const divideF = useDivide([{key: 'a', hook: (a) => a + 1}])
divideF({a: 3}) // {a: 4}
```

## useBatch

> 赋予单处理函数批量处理能力

```js
const setStyle = useBatch((el, key, value) => {
    el.style[key] = value;
  });

  setStyle([...items], 'color', 'red'); // 拥有了批量处理能力
```

## saveHook

> 数据保存，属性处理

```js
/**
 * 数据属性保留
 *
 * 1、属于includes
 * 2、不属于 excludes
 * 3、不在两者中的 + excludes 不为true = 其他属性保留
 *
 * @export
 * @param {any[] | any} [ds=[]]
 * @param {string[]} [includes=[]]
 * @param {string[]} [excludes=[]]
 * @returns
 */
const testObj = {
  'a': 1,
  'b': 2,
  'c': 3,
  'd': 4,
};
saveHook(testObj, [], ['b', 'd']); // {'a': 1, 'c': 3}
```
