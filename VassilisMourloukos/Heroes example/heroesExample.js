  function Hero(name, level) {
    this.name = name;
    this.level = level;
  }
  
  function Warrior(name, level, weapon) {
    Hero.call(this, name, level);
  
    this.weapon = weapon;
  }
  
  function Healer(name, level, spell) {
    Hero.call(this, name, level);
  
    this.spell = spell;
  }
  function Paladin(name ,level , weapon , blessing){
      Hero.call(this,name,level);
      Warrior.call(this,name,level,weapon)
      this.blessing = blessing;
  }
  function Sorcerer (name, level , deBuff, attSpell){
      Hero.call(this,name,level);
      this.deBuff = deBuff;
      this.attSpell = attSpell;
  }
  
  // Link prototypes and add prototype methods
  Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
  Object.setPrototypeOf(Healer.prototype, Hero.prototype);
  Object.setPrototypeOf(Paladin.prototype,Warrior.prototype,Hero.prototype);
  Object.setPrototypeOf(Sorcerer.prototype, Hero.prototype);

  Hero.prototype.greet = function () {
    return `${this.name} says hello.`;
  }
  
  Warrior.prototype.attack = function () {
    return `${this.name} attacks with the ${this.weapon}.`;
  }
  
  Healer.prototype.heal = function () {
    return `${this.name} casts ${this.spell}.`;
  }
  Paladin.prototype.buff = function () {
      let diceRoll =Math.round(Math.random() * 5); //this is the function to choose where to cast the buff
      let heroRnd = heroesSelector[diceRoll];
      return `${this.name} casts ${this.blessing} at ${heroRnd.name}.`;
  }
Sorcerer.prototype.curse = function () {
    let diceRoll =Math.round(Math.random() * 5);//this is the function to choose where to cast the curse 
    let heroRnd = heroesSelector[diceRoll];
    return `${this.name} casts ${this.deBuff} at ${heroRnd.name}.`;
}
Sorcerer.prototype.attackingSpell = function () {
    return ` ${this.name} casts ${this.attSpell}.`;
}
// Initialize individual character instances
const hero$0 = new Sorcerer("Kal",2,"hex","fireball");
const hero$1 = new Warrior('Bjorn', 1, 'axe');
const hero$2 = new Healer('Kanin', 1, 'cure');
const hero$3 = new Paladin("Arthas",3,"Mace","protection");
const hero$4 = new Sorcerer("Scanlon",2,"slow","arcane missile");
const hero$5 = new Warrior ("Niflin",2,"broadsword");


//This is the line to pick the target of each buff ,debuff etc  
var heroesSelector = [hero$0,hero$1,hero$2,hero$3,hero$4,hero$5];





//debugging pursposes
console.log(hero$0.greet());
console.log(hero$1.attack());
console.log(hero$0.curse());
console.log(hero$0.attackingSpell());
console.log(hero$3.attack());
console.log(hero$3.buff());
console.log(hero$4.attackingSpell());
console.log(hero$4.curse());
