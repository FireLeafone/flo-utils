# Dom

> Dom 相关

## debounce

> 防抖函数，（高频操作，性能优化）

- @param {\*} fn
- @param {number} [step=100]
- @returns {Promise}

```js
const debounceAjax = debounce((newParams) => {
  return new Promise((resolve, reject) => {
    xhr({
      url: '/api',
      type: 'POST',
      data: newParams,
      success: (res) => {
        const { data } = res;
        const arr = isArray(data) ? data : [];
        resolve(arr);
      },
      error: (err) => {
        reject(err);
      },
    });
  });
}, 300);

export function apiExample(params) {
  const newParams = filterParams(params);
  return new Promise((resolve) => {
    const keys = Object.keys(newParams);
    if (!keys.length) {
      resolve([]);
    } else {
      debounceAjax(newParams).then((res) => {
        resolve(res);
      });
    }
  });
}
```

## throttle

> 节流函数，（高频操作，性能优化）

- @param {\*} func
- @param {number} [wait = 300]
- @returns {Promise}

使用：**同 debounce**

## downloadLink

> 下载模拟，`<a href="url" download></a>`

- @param {string} url
- @param {string} filename

## drawLineArrow

> `svg,path` 勾画直线中间箭头

- params {path} x1 y1 x2 y2
