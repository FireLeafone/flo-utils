/**
 * 钩子函数处理
 * 参数合并
 */

/**
 *
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
