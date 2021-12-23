/**
 * @name numPoints 数字千分符，支持小数
 * @param {*} num
 * @param {number} [precision], 不传则返回所以小数部分
 * @return {string}
 * @example
 *
 * numPoints(1001);
 * => '1,001.00'
 *
 * numPoints('sd');
 * => 'sd'
 */

import toNumber from 'lodash/toNumber';
import isNumber from 'lodash/isNumber';
import beNaN from './beNaN';
import { consoleWran } from './warn/util';

function numPoints(num, precision) {
  const toNum = toNumber(num);
  if (precision && !isNumber(precision)) {
    consoleWran('srcond param type is number');
    return num || '';
  }
  if (beNaN(toNum)) return num || '';

  const str = precision ? `${toNum.toFixed(precision)}` : `${toNum}`;
  let decimal = str.split('.')[1] || ''; // 小数部分
  const inter = str.split('.')[0] || ''; // 整数部分
  const revInter = inter.replace(/(?=(?!\b)(\d{3})+$)/g, ',');

  if (precision) {
    const add0 = new Array(precision + 1).join(0).split('').join('');
    if (decimal.length < precision) {
      decimal += add0;
    }
    return `${revInter}.${decimal}`;
  }
  if (precision === 0) {
    return revInter;
  }
  return decimal ? `${revInter}.${decimal}` : revInter;
}

export default numPoints;
