# util

> 工具集

## useCompose

> 函数式编程 `compose`

数据操作集合成加工 A => B => C: `useCompose([C, B, A])(data)`

- @name useCompose
- @param {array} [middlewares] 操作集
- @param {array} [hooks] 操作额外钩子
- @param {boolean} [isReverse] 是否翻转操作，默认true

```js
useCompose(
  console.log,
  partial(add, 10),
  partial(pow, 3),
  partial(multiply, 5)
)(2); // 1010
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

> 函数参数处理钩子

- @name usePartialHooks
- @param {function} [fn] 操作集
- @param {array} [presetArgs] 预设参数
- @param {boolean} [isReverse] 是否翻转操作，默认false

```js
const mockA = (a, b) => a - b;
const foo = usePartialHook(mockA, [10], true);

foo(2); // -8
```