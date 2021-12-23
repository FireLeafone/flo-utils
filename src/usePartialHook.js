/**
 * 偏函数
 * 钩子函数处理
 * 参数合并
 */

/**
const mockA = (a, b) => a - b;
const foo = usePartialHook(mockA, [10], true);

foo(2); // -8
 * @param {*} fn
 * @param {*} [presetArgs=[]] // 预设参数
 * @param {boolean} [isReverse=false]
 * @returns
 */
function usePartialHooks(fn, presetArgs = [], isReverse = false) {
  return (...laterArgs) => {
    const args = isReverse
      ? [...laterArgs, ...presetArgs]
      : [...presetArgs, ...laterArgs];
    return fn(...args);
  };
}

export default usePartialHooks;
