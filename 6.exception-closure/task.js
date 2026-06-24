function parseCount(number) {
  let result = Number.parseFloat(number);
  if (isNaN(result)) {
    throw new Error("Невалидное значение");
  }
  return result;
}
function validateCount(number) {
  try {
    return parseCount(number);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (
      this.a + this.b < this.c ||
      this.a + this.c < this.b ||
      this.b + this.c < this.a
    ) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }
  get perimeter() {
    return this.a + this.b + this.c;
  }
  get area() {
    let p = this.perimeter / 2;
    return Number(
      Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3),
    );
  }
}

const myTriangle = new Triangle(2, 5, 5);
function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get area() {
        return "Ошибка! Треугольник не существует";
      },
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}
const myTri = getTriangle(100, 3, 10);
console.log(myTri);
console.log(myTri.area);
console.log(myTri.perimeter);
