# Array

> 数组相关

## isRepeatArray

> 数组是否存在重复元素

```js
isRepeatArray([1, 1, 2]); // => true
isRepeatArray([{name: 'sd', id: 1}, {name: 'sd2', id: 1}], 'id'); // true
```

## uniqueArray

> 数组去重，集合`lodash.uniq` 及 `lodash.uniqBy`, 支持多种情况下的子集判断

```js
uniqueArray([1, 3, 3, 5]); // [1, 3, 5]
uniqueArray(['sad', 'd', 'd']); // ['sad', 'd']
uniqueArray([{name: 'a'}, {name: 'a'}, {name: 'b'}], 'name'); // [{name: 'a'}, {name: 'b'}]
```

## maxArrNum

> 数组求最大数

```js
maxArrNum([1, 3, 5]); // 5
maxArrNum([1, 3, 'a']); // NaN
```

## minArrNum

> 数组求最小数

```js
minArrNum([1, 3, 5]); // 1
minArrNum([1, 3, 'a']); // NaN
```