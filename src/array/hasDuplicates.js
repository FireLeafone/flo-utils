/**
 *
 * 判重
 * @export
 * @param {*} a
 * @param {*} fn
 * @returnsß
 */
export default function hasDuplicates (a, fn) {
    if (!a || !a.length) return false;
    let result = null;
    for (const item of a) {
      if (typeof fn == 'function') {
        result = a.filter(list => fn(item, list));
      } else if (typeof fn == 'string') {
        result = a.filter(list => list[fn] == item[fn]);
      } else if (Array.isArray(fn)) {
        result = a.filter(list => {
          return fn.reduce((r, s) => {
            return r && list[s] == item[s];
          }, true);
        });
      }
      // console.log(result);
      if (result && result.length > 1) {
        return true;
      }
    }
    return false;
  }