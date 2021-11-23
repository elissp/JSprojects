//Create more Heroe's categories like Warrior and Healer

//Add your own parameters to them

//Create for its constructor at least two object instances.

//Use your own prototypes and store your objects-informations

//Create a a div root Element as entry point as well inject some informations in the UI from object instancess

function Hero(name, level, race) {
    this.name = name;
    this.level = level;
    this.race = race;
  }
  
  function Warrior(name, level, race, weapon) {
    Hero.call(this, name, level, race);
  
    this.weapon = weapon;
  }
  
  function Healer(name, level, race, spell) {
    Hero.call(this, name, level, race);
  
    this.spell = spell;
  }

  function Rogue(name, level, race, weapon, skill) {
    Hero.call(this, name, level, race);

    this.weapon = weapon;  
    this.skill = skill;
}

function Mage(name, level, race, spell) {
  Hero.call(this, name, level, race);
  
  this.spell = spell;
}
  
  // Link prototypes and add prototype methods
  Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
  Object.setPrototypeOf(Healer.prototype, Hero.prototype);
  Object.setPrototypeOf(Rogue.prototype, Hero.prototype);
  Object.setPrototypeOf(Mage.prototype, Hero.prototype);
  
  Hero.prototype.greet = function () {
    return `${this.name} says hello.`;
  }
  
  Warrior.prototype.attack = function () {
    return `${this.name} attacks with the ${this.weapon}`;
  }
  
  Healer.prototype.heal = function () {
    return `${this.name} casts ${this.spell}`;
  }

  Rogue.prototype.sneak = function () {
    return `${this.name} moves silently and makes a ${this.skill} with his ${this.weapon}`;
}

  Mage.prototype.castSpell = function () {
  return `${this.name} casts a ${this.spell}`;
}
  
  // Initialize individual character instances
  const hero1 = new Warrior("Bjorn", 1, "human", "axe");
  const hero2 = new Healer("Kanin", 1, "human", "cure");
  const hero3 = new Rogue("Fenran", 1, "dwarf", "dagger", "sneak attack");
  const hero4 = new Mage("Bayaz", 1, "elf", "fireball");
  

  document.getElementById("battle-1").innerHTML = `${hero3.sneak()} to ${hero2.name} and at the same time the ${hero4.race} mage ${hero4.castSpell()} to ${hero1.name}.`;
  document.getElementById("battle-2").innerHTML = `On the second round ${hero2.heal()} spell to ${hero1.name}.`
 

  