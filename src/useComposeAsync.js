/**
 * Promise异步数据操作集合成加工 A => B => C
 * useComposeAsync([C, B, A])(data)
 *
 * @example
 * useComposeAsync(
    partial(add, 10),
    partial(pow, 3),
    partial(multiply, 5)
  )(2).then(res => console.log(res)); // 1010
 */

/**
 *
 * @param {*} [middlewares=[]] 异步函数
 * @param {*} [hooks=[]] 同步处理
 * @param {boolean} [isReverse=true]
 * @returns
 */
function useComposeAsync(middlewares = [], hooks = [], isReverse = true) {
  const fns = isReverse ? [...middlewares].reverse() : [...middlewares];
  const hns = isReverse ? [...hooks].reverse() : [...hooks];

  const reduce = (pre, cur, index) => {
    if (pre) {
      return (...args) => {
        return pre(...args).then((a) => {
          return cur(a).then((res) => {
            return hns[index] ? hns[index](res) : res;
          });
        });
      };
    }
    return (...args) => {
      return cur(...args).then((res) => {
        return hns[index] ? hns[index](res) : res;
      });
    };
  };

  return fns.reduce(reduce, null);
}

export default useComposeAsync;
