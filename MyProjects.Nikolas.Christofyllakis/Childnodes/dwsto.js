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
  function Amazon(name, level, bow) {
    Hero.call(this, name, level);
    this.bow = bow;
  }
  function PvP(hero1,vs,hero2) {
    this.hero1 = hero1;
    this.vs = vs;
    this.hero2 = hero2;
  }
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);
Object.setPrototypeOf(Amazon.prototype, Hero.prototype);
Object.setPrototypeOf(PvP.prototype, Hero.prototype);

Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
}

Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
}
Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`;
}
Amazon.prototype.bow = function () {
  return `${this.name} fires arrows with ${this.bow}.`;
}
PvP.prototype.hero1 = function () {
  return `${this.hero1} vs ${this.hero2}.`;
}


const hero1 = new Warrior('Bjorn', 1, 'axe');
const hero2 = new Healer('Kanin', 1, 'heal');
const hero3 = new Amazon('Huntress', 1, 'heal');
const fight = new PvP('Bjorn', `` , 'Kanin');


console.log(hero1);
console.log(hero2);
console.log(fight);