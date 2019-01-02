/**
 * @name numPoints 数字千分符，支持小数
 * @param {*} num
 * @param {number} [precision=2]
 * @return {string}
 * @example
 * 
 * numPoints(1001);
 * => '1,001.00'
 * 
 * numPoints('sd');
 * => 'sd'
 */

import _ from 'lodash';
import beNaN from '../basic/beNaN';

function numPoints (num, precision = 2) {
  const toNum = _.toNumber(num);
  if (!_.isNumber(precision)) {
    new Error('srcond param type is number');
    return num || '';
  }
  if (beNaN(toNum)) return num || '';

  var str = toNum.toFixed(precision) + '';
  var decimal = str.split('.')[1] || ''; // 小数部分
  var inter = str.split('.')[0] || ''; // 整数部分
  var revInter = inter.replace(/(?=(?!\b)(\d{3})+$)/g, ',');

  if (precision) {
    const add0 = new Array(precision + 1).join(0).split('').join('');
    if (decimal.length < precision) {
      decimal += add0;
    }
    return revInter + decimal;
  }
  return revInter;
}

export default numPoints;
