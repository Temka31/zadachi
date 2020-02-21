class Thing {
  constructor(name, def, atk, hp) {
    this.name = name;
    this.def = def;
    this.atk = atk;
    this.hp = hp;
  }
}
class Person {
  constructor(name, bHp, bAtk, bDef) {
    this.name = name;
    this.bHp = bHp;
    this.bAtk = bAtk;
    this.bDef = bDef;
    this.things = [];
    this.hp = 1;
    this.def = 1;
    this.atk = 1;
    this.calculateHp();
  }
  setThings(things) {
    this.things.push(...things);
    this.calculateHp();
    // this.bDef = this.bDef * (1 + things.def);
    // this.hp = this.hp + things.hp;
  }
  removeLife(attack) {
    this.hp = this.hp - attack * (1 - this.def);
  }
  calculateHp() {
    let tempHp = this.bHp;
    let tempDef = this.bDef;
    let tempAtk = this.bAtk;
    for (let thing of this.things) {
      tempHp += thing.hp;
      tempDef += thing.def;
      tempAtk += thing.atk;
    }
    this.def = tempDef;
    this.hp = tempHp;
    this.atk = tempAtk;
  }
  isLive() {
    return this.hp > 0;
  }
}
class Paladin extends Person {
  constructor(name, bHp, bAtk, bDef) {
    super(name, bHp * 2, bAtk, bDef * 2);
  }
}
class Warrior extends Person {
  constructor(name, hp, bAtk, bDef) {
    super(name, hp, bAtk * 2, bDef);
  }
}
let things = [];
for (let i = 0; i < 20; i++) {
  def = Math.random() * 0.09;
  atk = Math.floor(Math.random() * 38);
  hp = Math.floor(Math.random() * 10);
  things[i] = new Thing(i, def, atk, hp);
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
  name = playerNames[Math.floor(Math.random() * 10)];
  def = Math.floor(Math.random() * (2 - 1) + 1) / 10;
  atk = Math.floor(Math.random() * (40 - 1 - 1));
  hp = Math.floor(Math.random() * (100 - 90) + 90);
  if (Math.random() * 100 < 50) {
    persons[i] = new Paladin(name, hp, atk, def);
  } else {
    persons[i] = new Warrior(name, hp, atk, def);
  }
  playerNames.splice(playerNames.indexOf(name))
}
console.log(things);
console.log(persons);
let tempThings = [...things];
while (tempThings.length > 0) {
  persRand = Math.floor(Math.random() * persons.length);
  a = Math.floor(Math.random() * (tempThings.length + 1));
  b = Math.floor(Math.random() * (tempThings.length - a + 1));
  th = tempThings.splice(a, b);
  console.log(th);
  if (th.length > 0) {
    persons[persRand].setThings(th);
  }
}

console.log(persons);
while (persons.length > 1) {
  a = Math.floor(Math.random() * persons.length);
  b = Math.floor(Math.random() * persons.length);
  while (a == b) {
    b = Math.floor(Math.random() * persons.length);
  }
  console.log("Нападающий " + persons[a].name);
  console.log("Защита " + persons[b].name);
  persons[b].removeLife(persons[a].atk);
  if (!persons[b].isLive()) {
    console.log("Умер " + persons[b].name);
    persons.splice(b, 1);
  }
}
console.log("Победитель " + persons[0].name);
