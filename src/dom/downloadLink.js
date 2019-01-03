/**
 * @public
 * @name downloadLink
 * @param {string} url
 * @param {string} filename
 * @description 模拟下载
 */

const URL_REG = /((((http|ftp|https|file):\/\/)?)([\w\-]+\.)+[\w\-]+(\/[\w\u4e00-\u9fa5\-\.\/?\@\%\!\&=\+\~\:\#\;\,]*)?)/;

export const downloadLink = (url = '', filename = 'file') => {
  if (!URL_REG.test(url)) {
    new Error('url is error');
    return;
  }
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
};
