function getArrayParams(...arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const sum = arr.reduce((a, b) => a + b);
  const avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}

console.log(getArrayParams(1, 2, 3, -100, 10));

function summElementsWorker(...arr) {
  const init = 0;
  return arr.reduce((a, b) => a + b, init);
}
console.log(summElementsWorker());
console.log(summElementsWorker(10, 10, 11, 20, 10));

function differenceMaxMinWorker(...arr) {
  if ((arr = [])) {
    return 0;
  }
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return max - min;
}
console.log(differenceMaxMinWorker());
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10));
function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else if (arr[i] % 2 !== 0) {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}
console.log(differenceEvenOddWorker());
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17));

function averageEvenElementsWorker(...arr) {
  if ((arr = [])) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  return +(sumEvenElement / countEvenElement).toFixed(3);
}
console.log(averageEvenElementsWorker());
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9));

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (j = 0; j < arrOfArr.length; j += 1) {
    let result = func(...arrOfArr[j]);
    if (maxWorkerResult <= result) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}

const arr = [
  [10, 10, 11, 20, 10],
  [67, 10, 2, 39, 88],
  [72, 75, 51, 87, 43],
  [30, 41, 55, 96, 62],
];
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72
