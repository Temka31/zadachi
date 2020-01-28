class Thing {
    constructor(name){
        this.name=name;
        this.def=Math.floor(Math.random()*10);
        this.atk=Math.floor(Math.random()*(100-1)-1);
        this.hp=Math.floor(Math.random()*90);
    }}
 class Person {
constructor(name,hp,bAtk,bDef) {
    this.name=name;
    this.hp=hp;
    this.bAtk=bAtk;
    this.bDef=bDef
}
setThings(things) {


}
removeLife(attack) {

}
}
class Paladin extends Person {
    constructor(name,hp,bAtk,bDef){
        super(name,hp*2,bAtk,bDef*2)
}
}
class Warrior extends Person{
    constructor(name,hp,bAtk,bDef){
        super(name,hp,bAtk*2,bDef)
        }

}

var ol = new Thing ("3")
console.log(ol.name);
console.log(ol.def);
console.log(ol.atk);
console.log(ol.hp);
