class Thing {
  constructor(name, def, atk, hp) {
    this.name = name;
    this.def = def;
    this.atk = atk;
    this.hp =hp;
  }
}
class Person {
  constructor(name, bAtk, bDef) {
    this.name = name;
    this.hp = 100;
    this.bAtk = 20;
    this.bDef = 15;
  }
  setThings(things) {
    thingss=[];
    thingss[thingss.length+1]=things
    this.bDef=this.bDef*(1+things);

}
  removeLife(attack) {
  this.hp=this.hp-(attack*this.bDef) 
      
  }
}
class Paladin extends Person {
  constructor(name, hp, bAtk, bDef) {
    super(name, hp, bAtk, bDef);
    this.hp=this.hp*2;
    this.bDef=this.bDef*2;
  }
}
class Warrior extends Person {
  constructor(name, hp, bAtk, bDef) {
    super(name, hp, bAtk, bDef);
    this.bAtk=this.bAtk*2;
  }
}
let things = [];
for (let i = 0; i < 10; i++) {
  def=Math.floor(Math.random() * 10) / 10;
  atk = Math.floor(Math.random() * (40 - 1 - 1));
  hp = Math.floor(Math.random() * 90);	
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
  name=playerNames[Math.floor(Math.random() * 10)]
  def=Math.floor(Math.random() * 10) / 10;
  atk = Math.floor(Math.random() * (40 - 1 - 1));
  hp = Math.floor(Math.random() * 90);
  if (Math.random() * 100 < 50) {
    
    persons[i] = new Paladin(name);
  } else {
    persons[i] = new Warrior(name);
  }
while (things.length>0){
persRand=Math.floor(Math.random()*persons.length)
thingsRand=Math.floor(Math.random()*things.length)
persons[persRand].setThings(things[thingsRand].def);
things.splice(thingsRand,1)
}

persons[1].setThings(things[1].def);

console.log(things);
console.log(persons);
console.log(personss);
