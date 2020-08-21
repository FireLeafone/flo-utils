/**
 * @name hexToRgb
 * @param [string] #xxx || #xxxxxx
 * @param [number] a, 透明度
 * @return rgb(r, g, b)
 */

function hexToRgb(hex, a = 0.8) {
  const rgb = [];

  let hexx = hex.substr(1); // 去除前缀 # 号

  if (hexx.length === 3) {
    // 处理 "#abc" 成 "#aabbcc"
    hexx = hexx.replace(/(.)/g, '$1$1');
  }

  hexx.replace(/../g, (color) => {
    rgb.push(parseInt(color, 0x10)); // 按16进制将字符串转换为数字
  });

  return `rgba(${rgb.join(', ')}, ${a})`;
}

export default hexToRgb;
