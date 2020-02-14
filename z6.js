class Thing {
  constructor(name, def, atk, hp) {
    this.name = name;
    this.def = def;
    this.atk = atk;
    this.hp = hp;
  }
}
class Person {
  constructor(name, hp, bAtk, bDef) {
    this.name = name;
    this.hp = hp;
    this.bAtk = bAtk;
    this.bDef = bDef;
    
  }
  setThings(things) {
      this.things=[];
    this.things.push(...things);
    // this.bDef = this.bDef * (1 + things.def);
    // this.hp = this.hp + things.hp;
  }
  removeLife(attack) {
    this.hp = this.hp - (attack * (1- this.bDef));
  }
  equip(){
    for (let i in this.things) {
      this.bDef = this.bDef + this.things[i].def;
      this.hp = this.hp + this.things[i].hp;
      this.bAtk = this.bAtk + this.things[i].atk;
    }
  }
}
class Paladin extends Person {
  constructor(name, hp, bAtk, bDef) {
    super(name, hp, bAtk, bDef);
    this.hp = hp * 2;
    this.bDef = bDef * 2;
  }
}
class Warrior extends Person {
  constructor(name, hp, bAtk, bDef) {
    super(name, hp, bAtk, bDef);
    this.bAtk = this.bAtk * 2;
  }
}
let things = [];
for (let i = 0; i < 20; i++) {
  def = Math.random() * (0.09) ;
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
  def = Math.floor(Math.random() * (2-1)+1) / 10;
  atk = Math.floor(Math.random() * (40 - 1 - 1));
  hp = Math.floor(Math.random() * (100 - 90) + 90);
  if (Math.random() * 100 < 50) {
    persons[i] = new Paladin(name, hp, atk, def);
  } else {
    persons[i] = new Warrior(name, hp, atk, def);
  }
}
console.log(things);
console.log(persons);
while (things.length > 0) {
  persRand = Math.floor(Math.random() * (persons.length));
  a=Math.floor(Math.random() * (things.length+1));
  b= Math.floor(Math.random() * (things.length-a+1));
  th=things.splice(a, b);
  console.log(th)
  if (th.length>0) {
  persons[persRand].setThings(th);
  persons[persRand].equip();}
}

console.log(persons);
while (persons.length > 1) {
  a = Math.floor(Math.random() * persons.length);
  b = Math.floor(Math.random() * persons.length);
  while (a == b) {
    b = Math.floor(Math.random() * persons.length);
  }
  console.log('Нападающий ' +persons[a].name);
  console.log('Защита ' +persons[b].name);
  persons[b].removeLife(persons[a].bAtk)
  if (persons[b].hp < 0) {
    console.log('Умер ' +persons[b].name);
    persons.splice(b, 1);

  }

}
console.log('Победитель ' + persons[0].name)
