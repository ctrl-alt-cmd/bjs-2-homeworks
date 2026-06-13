function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);

Student.prototype.setSubject = function (subjectName) {
  this.subjectName = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  if (!this.marks) {
    return 0;
  } else this.marks = [...marks];
};

Student.prototype.getAverage = function () {
  if (!this.marks || this.marks.length === 0) {
    return 0;
  }
  const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
  return sum / this.marks.length;
};

Student.prototype.exclude = function (reason) {
  delete this.subjectName;
  delete this.marks;
  this.excluded = reason;
};

student1.setSubject("Algebra");
student1.addMarks(4, 5, 4, 5);
student2.addMarks();
student2.setSubject("Geometry");
student2.exclude("плохая учёба");
console.log(student1);
console.log(student1.getAverage());
console.log(student2);
student2.addMarks(4);
console.log(student2);
console.log(student2.getAverage());
