# Format

> 格式化相关

## antdFormFormat

> antd下的form组件，数据格式化回显

```js
antdFormFormat({name: 'ad', age: 12});
/*
{
  name: {
    value: 'ad'
  },
  age: {
    value: 12
  }
}
*/
```

## unBindAntdForm

> antd下的form组件，数据格式化

```js
unBindAntdForm({
  name: {
    value: 'ad'
  },
  age: {
    value: 12
  }
});
/*
{name: 'ad', age: 12}
*/
```

## btSize

> 高容量置换 为 bt

```js
btSize('1024kb'); // 10241024
```

## formatDate

> 基于moment，时间格式化

* @param {date}
* @param {string} rule 格式
* @return {string}

```js
formatDate(1548763311992); // '' 2019-01-29
formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss');
// => '2019-01-02 20:26:00' // 举例

formatDate('20190101');
//=> '20190101'
```

## numpoints

> 数字千分符，支持小数

* @param {*} num
* @param {number} [precision=2]
* @return {string}

```js
numPoints(1001);
// => '1,001.00'

numPoints('sd');
// => 'sd'
```

## rgbToHex

> 颜色格式转换，rgb 转 hex

* @name rgbToHex
* @param [string] rgb(r, g, b)
* @return 16进制颜色 #xxxxxx

```js
rgbToHex('rgb(255, 182, 193)'); // #FFB6C1
```

## hexToRgb

> 颜色格式转换，hex 转 rgb

* @name hexToRgb
* @param [string] #xxx || #xxxxxx
* @return rgb(r, g, b)

```js
hexToRgb('#FFB6C1'); // rgb(255, 182, 193)
```