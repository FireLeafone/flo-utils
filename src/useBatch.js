/**
 * 函数拥有了单个操作或者批量操作元素的能力
 *
 * @param {*} fn
 *
 * @example
 *
 * const setStyle = useBatch((el, key, value) => {
    el.style[key] = value;
  });

  setStyle([...items], 'color', 'red'); // 拥有了批量处理能力
 *
 */
function useBatch(fn) {
  return (subject, ...args) => {
    if (Array.isArray(subject)) {
      return subject.map((s) => {
        return fn.call(this, s, ...args);
      });
    }
    return fn.call(this, subject, ...args);
  };
}

export default useBatch;
