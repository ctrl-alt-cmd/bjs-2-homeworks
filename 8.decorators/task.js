const md5 = require("blueimp-md5");
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
