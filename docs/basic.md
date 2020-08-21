# Basic

> 基础方法

## beNaN

> NaN 判断

```js
beNaN(NaN);
// => true

beNaN(new Number(NaN));
// => true

window.isNaN(undefined);
// => true

beNaN(undefined);
// => false
```

## isArray

> 数组判断, 不能判断**类数组**

```js
isArray([1, 2, 3]);
// => true

isArray('abc');
// => false

isArray(document.body.children);
// => false
```

## isLength

> 大于等于 0 的长度判断，不能超 js 数字范围

```js
isLength(3);
// => true

isLength(Number.MIN_VALUE);
// => false

isLength('3');
// => false
```

## isNull

> null 判断

```js
isNull(null);
// => true

isNull('null');
// => false

isNull(void 0);
// => false
```

## isNumber

> number 判断

```js
_.isNumber(3);
// => true

_.isNumber(Number.MIN_VALUE);
// => true

_.isNumber(Infinity);
// => true

_.isNumber('3');
// => false
```

## isObject

> 对象判断

```js
isObject({});
// => true

isObject([]);
// => false

isObject(null);
// => false
```

## isString

> string 判断

```js
isString('ad');
// => true

isString(1);
// => false
```

## isUndefined

> undefined 判断

```js
isUndefined(undefined);
// => true

isUndefined('null');
// => false

isUndefined(null);
// => false
```
