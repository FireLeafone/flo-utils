/**
 * 数据操作集合成加工 A => B => C
 * useCompose([C, B, A])(data)
 *
 * @example
 * useCompose(
    console.log,
    partial(add, 10),
    partial(pow, 3),
    partial(multiply, 5)
  )(2); // 1010
 */

/**
 *
 * @param {*} [middlewares=[]]
 * @param {*} [hooks=[]]
 * @param {boolean} [isReverse=true]
 * @returns
 */
function useCompose(middlewares = [], hooks = [], isReverse = true) {
  const fns = isReverse ? [...middlewares].reverse() : [...middlewares];
  const hns = isReverse ? [...hooks].reverse() : [...hooks];

  const reduce = (pre, cur, index) => {
    if (pre) {
      return (...args) => {
        const res = cur(pre(...args));
        return hns[index] ? hns[index](res) : res;
      };
    }
    return (...args) => {
      const res = cur(...args);
      return hns[index] ? hns[index](res) : res;
    };
  };

  return fns.reduce(reduce, null);
}

export default useCompose;
