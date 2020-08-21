# String

> 字符串集

## randomId

> 随记 Id, 生成 10-12 位不等的字符串

```js
randomId(); // 随机Id
```

## randomColor

> 随记生成颜色

- @name randomColor
- @link https://www.jianshu.com/p/54fc0fce46cc
- @param {string} [type='16#'] (16#, rgba, 'hsla')
- @param {number} [alpha=1] 透明度

```js
randomColor('rgba', 0.8); // 随机color
```

## trim

> 字符串去空（制表符和换行符）

- @name trim
- @param {string} [str=''] 目标字符串
- @param {string} [position="both"] 去除位置 `left|right|both|center|all`

```js
trim(' s t r '); //s t r
```
