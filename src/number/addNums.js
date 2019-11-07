/**
 * 精确加法, 预防相加结果精度问题
 * 支持同单位数相加
 * @param num1 {number, string}
 * @param num2 {number, string}
 */
export default function addNums (num1, num2) {
  const dreg = /^\d+(\.\d+)?/g;
  const d1 = num1.toString().replace(dreg, "");
  const d2 = num2.toString().replace(dreg, "");
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);
  if (d1 != d2) return `${num1} + ${num2}`;
  
  const num1Digits = (n1.toString().split(".")[1] || "").length;
  const num2Digits = (n2.toString().split(".")[1] || "").length;
  const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));
  const add = (n1 * baseNum + n2 * baseNum) / baseNum;
  return add + d1;
}