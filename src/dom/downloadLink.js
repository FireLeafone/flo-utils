/**
 * @public
 * @name downloadLink
 * @param {string} url
 * @param {string} filename
 * @description 模拟下载
 */

const downloadLink = (url = '', filename = 'file') => {
  if (!url) return false;
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(a.href);
  a.remove();
};

export default downloadLink;
