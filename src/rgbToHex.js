/**
 * @name rgbToHex
 * @param [string] rgb(r, g, b)
 * @return 16进制颜色 #xxxxxx
 */

function rgbToHex(rgb) {
  // rgb(x, y, z)
  const color = rgb.toString().match(/\d+/g); // 把 x,y,z 推送到 color 数组里
  let hex = '#';

  for (let i = 0; i < 3; i += 1) {
    // 'Number.toString(16)' 是JS默认能实现转换成16进制数的方法.
    // 'color[i]' 是数组，要转换成字符串.
    // 如果结果是一位数，就在前面补零。例如： A变成0A
    hex += `0${Number(color[i]).toString(16)}`.slice(-2);
  }
  return hex.toUpperCase();
}

export default rgbToHex;
