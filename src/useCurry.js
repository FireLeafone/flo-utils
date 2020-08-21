/**
 * 函数式编程 柯里化
 * 完成类似lodash.curry功能，并进行扩展
 * @example
var abc = function(a, b, c) {
  return [a, b, c];
};

var curried = useCurry(abc);

curried(1)(2)(3);
// => [1, 2, 3]

curried(1, 2)(3);
// => [1, 2, 3]

curried(1, 2, 3);
// => [1, 2, 3]

// Curried with placeholders.
curried(1)(_, 3)(2);
// => [1, 2, 3]
 */

const placeholder = '_'; // 占位符

/**
 *
 * @param {*} targetfn
 * @param {*} args
 * @returns
 */
function useCurry(targetfn, ...args) {
  let nextPos = 0; // 下一个有效参数索引
  const preset = [...args]; // 预设参数
  const argsNum = targetfn.length; // 目标函数参数个数
  const fps = preset.filter((p) => p !== placeholder);

  if (fps.length === argsNum) {
    return targetfn(...fps);
  }

  return (...added) => {
    // 循环并将added参数添加到preset参数
    while (added.length > 0) {
      const a = added.shift();
      // 获取下一个占位符的位置，可以是'_'也可以是preset的末尾
      while (preset[nextPos] !== placeholder && nextPos < preset.length) {
        nextPos += 1;
      }
      // 更新preset
      preset[nextPos] = a;
      nextPos += 1;
    }
    return useCurry.call(null, targetfn, ...preset);
  };
}

export default useCurry;
