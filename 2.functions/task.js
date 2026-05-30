function getArrayParams(...arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  /*let sum = 0;
  for (i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  const avg = +(sum / arr.length).toFixed(2);*/
  const sum = arr.reduce((a, b) => a + b);
  const avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}
console.log(getArrayParams(1, 2, 3, -100, 10));

function summElementsWorker(...arr) {
  return arr.reduce((a, b) => a + b);
}
console.log(summElementsWorker(10, 10, 11, 20, 10));

function differenceMaxMinWorker(...arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return max - min;
}
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
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17));
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  return sumEvenElement / countEvenElement;
}
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));

//function makeWork(arrOfArr, func) {}
