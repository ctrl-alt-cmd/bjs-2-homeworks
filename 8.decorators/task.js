//const md5 = require("blueimp-md5");
//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    const hash = md5(args);
    let objectInCache = cache.find((item) => item.hash === hash);
    if (objectInCache) {
      // если элемент найден
      console.log("Из кеша: " + objectInCache.result); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
      return "Из кеша: " + objectInCache.result;
    }
    let result = func(...args); // в кеше результата нет — придётся считать
    cache.push({ hash, result }); // добавляем элемент с правильной структурой
    if (cache.length > 5) {
      cache.shift(); // если слишком много элементов в кеше, надо удалить самый старый (первый)
    }
    console.log("Вычисляем: " + result);
    console.log(cache);
    return "Вычисляем: " + result;
  }

  return wrapper;
}

const addAndMultiply = (a, b, c) => (a + b) * c;
const upgraded = cachingDecoratorNew(addAndMultiply);
upgraded(1, 2, 3); // вычисляем: 9
upgraded(1, 2, 3); // из кеша: 9
upgraded(2, 2, 3); // вычисляем: 12
upgraded(3, 2, 3); // вычисляем: 15
upgraded(4, 2, 3); // вычисляем: 18
upgraded(5, 2, 3); // вычисляем: 21
upgraded(6, 2, 3); // вычисляем: 24 (при этом кеш для 1, 2, 3 уничтожается)
upgraded(1, 2, 3); // вычисляем: 9  (снова вычисляем, кеша нет)
//Задача № 2
//function debounceDecoratorNew(func, delay) {}

function debounceDecoratorNew(func, ms) {
  let timeout;
  let isCooldown = false;

  function wrapper(...args) {
    // считаем ВСЕ вызовы декорированной функции
    wrapper.allCount++;

    // если сейчас можно выполнять — выполняем сразу
    if (!isCooldown) {
      func.apply(this, args);
      wrapper.count++;

      isCooldown = true;

      setTimeout(() => {
        isCooldown = false;
      }, ms);

      return;
    }

    // если идет период ожидания —
    // отменяем предыдущий отложенный вызов
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(this, args);
      wrapper.count++;

      isCooldown = true;

      setTimeout(() => {
        isCooldown = false;
      }, ms);
    }, ms);
  }

  wrapper.count = 0;
  wrapper.allCount = 0;

  return wrapper;
}

const sendSignal = (signalOrder, delay) =>
  console.log("Сигнал отправлен", signalOrder, delay);
const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
setTimeout(() => upgradedSendSignal(1, 0)); // Сигнал отправлен + будет запланирован асинхронный запуск, который будет проигнорирован, так как следующий сигнал отменит предыдущий (300 - 0 < 2000)
setTimeout(() => upgradedSendSignal(2, 300), 300); // проигнорировано, так как следующий сигнал отменит предыдущий (900 - 300 < 2000)
setTimeout(() => upgradedSendSignal(3, 900), 900); // проигнорировано, так как следующий сигнал отменит предыдущий (1200 - 900 < 2000)
setTimeout(() => upgradedSendSignal(4, 1200), 1200); // проигнорировано, так как следующий сигнал отменит предыдущий (2300 - 1200 < 2000)
setTimeout(() => upgradedSendSignal(5, 2300), 2300); // Сигнал отправлен, так как следующий вызов не успеет отменить текущий: 4400-2300=2100 (2100 > 2000)
setTimeout(() => upgradedSendSignal(6, 4400), 4400); // проигнорировано, так как следующий сигнал отменит предыдущий (4500 - 4400 < 2000)
setTimeout(() => upgradedSendSignal(7, 4500), 4500); // Сигнал будет отправлен, так как последний вызов debounce декоратора (спустя 4500 + 2000 = 6500) 6,5с
setTimeout(() => {
  console.log(upgradedSendSignal.count); // было выполнено 3 отправки сигнала
  console.log(upgradedSendSignal.allCount); // было выполнено 6 вызовов декорированной функции
}, 7000);
