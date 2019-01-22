/**
 * @public
 * @name downloadLink
 * @param {string} url
 * @param {string} filename
 * @description 模拟下载
 */

const downloadLink = (url = '', filename = 'file') => {
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
};

export default downloadLink;
