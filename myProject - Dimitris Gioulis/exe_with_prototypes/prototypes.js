//Create more Heroe's categories like Warrior and Healer

//Add your own parameters to them

//Create for its constructor at least two object instances.


//Use your own prototypes and store your objects-informations

//Create a a div root Element as entry point as well inject some informations in the UI from object instancess

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

// wizard 

function wizard(name, level, magic) {
  Hero.call(this, name, level);

  this.magic = magic;
}

function elf(name, level, power) {
  Hero.call(this, name, level);

  this.power = power;
}

// Link prototypes and add prototype methods
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);
Object.setPrototypeOf(wizard.prototype, Hero.prototype);
Object.setPrototypeOf(elf.prototype, Hero.prototype);

Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
}

Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
}

Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`;
}

wizard.prototype.magics =function() {
  return `${this.name} damage ${this.magic}.`;
}

elf.prototype.powers = function() {
  return `${this.name} fights with ${this.power}.`;
}

// Initialize individual character instances
const hero1 = new Warrior('Bjorn', 1, 'axe');
const hero2 = new Healer('Kanin', 1, 'cure');
const heroW = new wizard('Gandalf', 5, 'Stuff')
const heroE = new elf('Legolas', 4, 'bow')
console.log(heroW);
console.log(heroE);

