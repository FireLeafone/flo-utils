/**
 *
 * @name btSize 容量置换 为 bt
 * @param {*} size
 * @returns
 */
function btSize(size) {
  const types = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const k = 1024;
  if (typeof size === 'string') {
    const num = parseFloat(size);
    const unit = size.replace(num, '');
    const i = types.indexOf(unit.trim().toUpperCase());
    if (i < 0) {
      return 0;
    }
    return parseInt(num * k ** i, 10);
  }
  if (typeof size === 'number') {
    return size;
  }
  return 0;
}

export default btSize;
