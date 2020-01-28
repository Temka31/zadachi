class Thing {
  constructor(name) {
    this.name = name;
    this.def = Math.floor(Math.random() * 10) / 10;
    this.atk = Math.floor(Math.random() * (40 - 1 - 1));
    this.hp = Math.floor(Math.random() * 90);
  }
}
class Person {
  constructor(name, hp, bAtk, bDef) {
    this.name = name;
    this.hp = hp;
    this.bAtk = bAtk;
    this.bDef = bDef;
  }
  setThings(things) {}
  removeLife(attack) {
      
  }
}
class Paladin extends Person {
  constructor(name, hp, bAtk, bDef) {
    super(name, hp * 2, bAtk, bDef * 2);
  }
}
class Warrior extends Person {
  constructor(name, hp, bAtk, bDef) {
    super(name, hp, bAtk * 2, bDef);
  }
}
let things = [];
for (let i = 0; i < 10; i++) {
  things[i] = new Thing(i);
}

var playerNames = [
  "Rabbit",
  "Helpless",
  "Warm",
  "Dreaded",
  "Foal",
  "Desire",
  "Kit",
  "Angel",
  "Dusty",
  "Sweety",
  "Frozen",
  "Silver",
  "Heavy",
  "Wombat",
  "Lost",
  "Puma",
  "Vital",
  "Panda",
  "Rolling Sun",
  "Steel Runny"
];
var player = ["Paladin", "Warrior"];

let persons = [];
for (let i = 0; i < 10; i++) {
  if (Math.random() * 100 < 50) {
    persons[i] = new Paladin(playerNames[Math.floor(Math.random() * 10)]);
  } else {
    persons[i] = new Warrior(playerNames[Math.floor(Math.random() * 10)]);
  }
}
console.log(things);
console.log(persons);
