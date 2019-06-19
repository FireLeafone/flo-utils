# Object

> 对象相关

## emptyObj

> 判断空对象

```js
emptyObj({}); // => true
emptyObj({name: '12'}); // false
```

## isEquivalentObj

> 对象判等

```js
const o1 = {a: 1, b: 2};
const o2 = {a: 1, b: 2};
const o2 = {a: 1, b: 3};

isEquivalentObj(o1, o2); // true
isEquivalentObj(o1, o3); // false
```
