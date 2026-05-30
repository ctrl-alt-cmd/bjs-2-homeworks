function getArrayParams(...arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  let sum = 0;
  for (i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  const avg = (sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}
getArrayParams(-99, 99, 10);

function summElementsWorker(...arr) {}

function differenceMaxMinWorker(...arr) {}

function differenceEvenOddWorker(...arr) {}

function averageEvenElementsWorker(...arr) {}

function makeWork(arrOfArr, func) {}
