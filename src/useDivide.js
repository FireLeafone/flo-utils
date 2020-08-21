import isArray from './isArray';
import isObject from './isObject';

/**
 * 数据分而治之，汇总输出
 *
 * @example
 *
 * const divideF = useDivide([{key: 'a', hook: (a) => a + 1}])
 *
 * divideF({a: 3}) // {a: 4}
 *
 * @param {*} [hooks=[]]
 * [{
 *   key: string|number,
 *   hook: v => dv
 * }]
 * @param {*} [divide=(v) => v]
 * @returns
 */
function useDivide(hooks = [], divide = (v) => v) {
  return (target) => {
    const hkeys = hooks.map((h) => h.key);

    if (isArray(target)) {
      return target.map((t, i) => {
        const index = hkeys.findIndex((k) => k === i);

        if (index > -1) {
          const { hook } = hooks[index];
          return hook ? hook(t) : t;
        }

        return divide ? divide(t) : t;
      });
    }

    if (isObject(target)) {
      const o = {};
      Object.keys(target).forEach((t) => {
        const index = hkeys.findIndex((k) => k === t);
        const tv = target[t];
        if (index > -1) {
          const { hook } = hooks[index];
          o[t] = hook ? hook(tv) : tv;
        } else {
          o[t] = divide ? divide(tv) : tv;
        }
      });
      return o;
    }

    return target;
  };
}

export default useDivide;
