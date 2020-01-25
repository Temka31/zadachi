class Worker {

    constructor(name, surname, rate, days) {
    this.name = name;
    this.surname=surname;
    this.rate=rate;
    this.days=days;
    }
  
    getSalary() {
     return this.rate * this.days;
    }
    setRate (rate) {
      this.rate=rate
    }
    setRate (rate) {
      this.rate=rate
    }
    setDays (days) {
      this.days=days
    }
    getRate () {
      return this.rate
    }
    getDays () {
     return  this.days
    }
  }

 var worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

//Теперь используем сеттер:
worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10