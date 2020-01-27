  class Vector {
    constructor(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
    }

   get getLength() {
      return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2) + Math.pow(this.z,2));
    }
       
    static plus(a, b) {
      const x = a.x + b.x;
      const y = a.y + b.y;
      const z = a.z + b.z;
      return x+','+y+','+z;
    }
  
    static scalar(a, b) {
      return (a.x * b.x + a.y * b.y + a.z * b.z)
    }

    toString() {
      return `Вектор {X: ${this.x}; Y: ${this.y}; Z: ${this.z}}\nДлина = ${this.getLength}`
    }

    valueOf() {
      return this.x;
    }
  }

 var a = new Vector(1, 1, 1);
 var b = new Vector(2, 2, 2);

console.log(a.toString());
console.log(a.getLength);
console.log(b.toString());
console.log(b.getLength);
console.log("Сумма векторов = "+Vector.plus(a,b));
console.log("Скалярное произведение = " + Vector.scalar(a, b));
console.log(a.valueOf());
