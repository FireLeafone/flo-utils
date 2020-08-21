/**
 * @public
 * @name formatDate
 * @param {date}
 * @param {string} rule 格式
 * @return {string}
 * @description 时间格式化
 * @example
 *
 * formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss');
 * => '2019-01-02 20:26:00' // 举例
 *
 * formatDate('20190101');
 * => '20190101'
 */

import moment from 'moment';

const formatDate = (date, rule = 'YYYY-MM-DD') => {
  if (!date) return '';
  let ndate = date;
  if (typeof ndate === 'string') {
    ndate = ndate.trim();
  }
  const text = moment(ndate).format(rule);
  return text === 'Invalid date' ? ndate : text;
};

export default formatDate;
