/**
 * 精确加法, 预防相加结果精度问题
 * @param num1 {number, string}
 * @param num2 {number, string}
 */
export default function addNums (num1, num2) {
  const num1Digits = (num1.toString().split('.')[1] || '').length;
  const num2Digits = (num2.toString().split('.')[1] || '').length;
  const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));
  return (num1 * baseNum + num2 * baseNum) / baseNum;
}