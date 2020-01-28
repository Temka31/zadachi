class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    return this.name + " " + this.surname;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  getCourse() {
    let now = new Date(),
      nowYear = now.getFullYear();
    return nowYear - this.year;
  }
}

var student = new Student("Иван", "Иванов", 2017);

console.log(student.name); //выведет 'Иван'
console.log(student.surname); //выведет 'Иванов'
console.log(student.getFullName()); //выведет 'Иван Иванов'
console.log(student.year); //выведет 2017
console.log(student.getCourse()); //выведет 3 - третий курс, так как текущий год 2020
