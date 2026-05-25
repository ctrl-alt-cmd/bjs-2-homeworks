"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  if (d < 0) {
  } else if (d === 0) {
    arr.push(-b / (2 * a));
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  }
  return arr;
}
console.log(solveEquation(3, 9, 1));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let S = amount - contribution;
  percent = percent / 100;
  let P = percent / 12;
  let payment = S * (P + P / ((1 + P) ** countMonths - 1));
  let sum = payment * countMonths;
  sum = Math.round(sum * 100) / 100;
  return sum;
}
calculateTotalMortgage(10, 0, 50000, 12);
