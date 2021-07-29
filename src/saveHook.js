/**
 * 数据保存，属性处理
 */

import isPlainObject from 'lodash/isPlainObject';
import isArray from 'lodash/isArray';

/**
 * 数据属性保留
 *
 * 1、属于includes
 * 2、不属于 excludes
 * 3、不在两者中的 + excludes 不为true = 其他属性保留
 *
 * @export
 * @param {any[] | any} [ds=[]]
 * @param {string[]} [includes=[]]
 * @param {string[]} [excludes=[]]
 * @returns
 */
export default function saveHook(ds = [], includes = [], excludes = []) {
  if (!ds) return [];

  const isO = isPlainObject(ds);
  const isA = isArray(ds);
  const isCA = isArray(includes);
  const isEA = isArray(excludes);

  if (!isO && !isA) return ds;
  if (!isCA && !isEA) return ds;

  if (isO) {
    const o = {};
    const ks = Object.keys(ds);

    ks.forEach((k) => {
      if (isArray(includes) && includes.includes(k)) {
        o[k] = ds[k];
      } else if (isArray(excludes) && !excludes.includes(k)) {
        o[k] = ds[k];
      } else if (!excludes) {
        o[k] = ds[k];
      }
    });
    return o;
  }

  if (isA) {
    return ds.map((d) => saveHook(d, includes, excludes));
  }

  return ds;
}
