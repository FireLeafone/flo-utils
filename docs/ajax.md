# Ajax

> ajax 相关

## filterParams

> 参数过滤；空数组，空对象，空串，null, undefined

```js
const params = {
  id: 0,
  name: 'one',
  age: '',
  obj: { age: 10 },
  arr: [1],
  emptyA: [],
  emptyO: {},
};
filterParams(params);
/**
{
  id: 0,
  name: 'one',
  obj: {age: 10},
  arr: [1]
}
*/
```

## paramToObj

> 参数序列化转对象

`key=value&key=value`结构转对象

## queryString

> 对象参数序列化转字符串

对象参数转序列化`key=value&key=value`

## getIP

> 获取 ip，**浏览器兼容问题** [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/RTCPeerConnection/RTCPeerConnection#Browser_compatibility)

```js
getIP(function(ip){
    alert("Got IP! :" + ip);
}，(err) => console.log(err));
```
