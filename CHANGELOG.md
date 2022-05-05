# log

> pm log 🚀⏲

## 0.8.3

`2022-05-05`

- 🚀 `getNodeByKeyValues` @param {string|function} [key='key'] 支持 Fn(item, valus): boolean 自定义比较

## 0.8.2

`2022-04-16`

- 🐛修复`filterTreeFn`问题

## 0.8.1

`2021-12-23`

- 🚀 `setValueByPath` 通过路径设置值
- ⏳ `getValueByPath` 代码重构
- 处理警告信息输出

## 0.7.0

`2021-07-29`

- 🚀 `useCompaseAsync` 支持函数组合模式异步处理数据
- 🚀 `saveHook` 数据属性保存处理

## 0.6.0

`2021-04-26`

- 🚀 `useBatch` 赋予函数批量处理能力

## 0.5.2

`2020-12-29`

- `isEquivalentObj` 排除 function

## 0.5.1

`2020-08-21`

- 🐛修复新增方法无法使用bug
- 🚀 `useDivide` 支持分而治之模式处理数据项

## 0.5.0

`2020-08-21`

- ⏳ 优化整改代码规范
- 🚀 `useCompose` 支持函数组合模式处理数据
- 🚀 `useCurry` 支持柯里化式调用
- 🚀 `usePartialHook` 支持参数处理钩子

## 0.4.0

`2020-04-02`

- ⏳ 优化整改代码目录结构，适应按需加载
- 🚀 采用 `fire-tools` 进行编译打包

## 0.3.3

`2019-12-30`

- `hexToRgb` 修复 bug，缺少`a`

## 0.3.2

`2019-12-27`

- `getIP` 部分低版本浏览器不支持, 添加 try-catch，返回 false

## 0.3.1

`2019-12-23`

- ➕ `getIP` 获取 IP
- 优化打包 lodash, 减少打包代码体积

## 0.2.3

`2019-11-07`

- ➕ `getValueByPath` 通过 path 获取值
- `hexToRgb` 支持传入透明度，默认 0.8
- `arrayTreeCallBack` 支持 前序 DLR、后续 LRD 遍历
- `addNums` 支持单位保存（同单位相加）

## 0.2.2

`2019-09-26`

- `numpoints` 优化，逻辑，不传则返回所有小数

## 0.2.0

`2019-09-04`

- 使用`webpack`打包库
- 去除无用依赖
- 打包 min.js

## 0.1.10

`2019-07-26`

- 依赖整理，去除`@babel/runtime-corejs2`
- 补充一部分 code 测试

## 0.1.9

`2019-07-09`

- `numpoints`默认小数位为 `2 => 0`
- 升级 babel、jest 依赖版本

## 0.1.8

`2019-06-19`

- ➕ `filterTreeFn` tree 结构数据过滤，返回函数定义过滤
- ➕ `addNums` 浮点数精准相加
- ➕ `randomColor` 随记颜色

## 0.1.7

`2019-03-28`

- `uniqueArray`🐛

## 0.1.6

`2019-03-25`

- ➕ `unBindAntdForm`，解绑 FormData
- ➕ `hexToRgb` && `rgbToHex` 颜色转换
- `downloadLink`优化 url

## 0.1.5

`2019-02-21`

- isArray 低版本浏览器兼容
- 新增`treeFilter`, `throttle`, `randomId`
- 优化部分函数中参数判断

## 0.1.4

`2019-01-22`

- 修复 bug🐛

## 0.1.0

`2019-01-04` ☘

- 开启项目， start
