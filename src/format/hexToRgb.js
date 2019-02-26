/**
 * @name hexToRgb
 * @param [string] #xxx || #xxxxxx
 * @return rgb(r, g, b)
 */

function hexToRgb(hex) {
  const rgb = [];

  hex = hex.substr(1); // 去除前缀 # 号

  if (hex.length === 3) { // 处理 "#abc" 成 "#aabbcc"
    hex = hex.replace(/(.)/g, '$1$1');
  }

  hex.replace(/../g, function(color){
    rgb.push(parseInt(color, 0x10)); // 按16进制将字符串转换为数字
  });

  return "rgb(" + rgb.join(", ") + ")";
}

export default hexToRgb;