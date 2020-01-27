class Thing {
    constructor(name,def,atk){
        this.name=name;
        this.def=def;
        this.atk=atk;
        this.hp=hp;
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

