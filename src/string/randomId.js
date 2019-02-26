/**
 * @name randomId 随记ID
 * @returns 生成10-12位不等的字符串
 */
function randomId () {
  return Math.random().toString(36).slice(2); // 截取小数点后的字符串
}

export default randomId;