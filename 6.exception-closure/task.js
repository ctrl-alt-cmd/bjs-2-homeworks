function parseCount(number) {
  let result = Number.parseFloat(number);
  if (isNaN(result)) {
    throw new Error("Невалидное значение");
  }
  return result;
}

//console.log(parseCount("asdasf"));
//console.log(parseCount(123124));
function validateCount(number) {
  try {
    return parseCount(number);
  } catch (error) {
    return error;
  }
}
//console.log(validateCount("0123.124"));
//console.log(validateCount("sfsdf"));
class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.area = null;
    if (
      this.a + this.b < this.c ||
      this.a + this.c < this.b ||
      this.b + this.c < this.a
    ) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }
  set perimeter(perimeter) {}
  get perimeter() {
    return (this.perimeter = this.a + this.b + this.c);
  }
  set area(area) {
    let p = this.perimeter / 2;
    this._area = Number(
      Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3),
    );
  }
  get area() {
    return this._area;
  }
}

const myTriangle = new Triangle(2, 5, 5);
//console.log(myTriangle.perimeter);
//console.log(myTriangle.area);
function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    // return {
    //   perimeter: "Ошибка! Треугольник не существует",
    //   area: "Ошибка! Треугольник не существует",
    // };
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
