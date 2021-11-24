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

function Druid(name, level, seeds){
    Hero.call(this,name,level);

    this.seeds = seeds;
}

function Bard(name, level, musicalInstrument){
    Hero.call(this,name,level);

    this.musicalInstrument = musicalInstrument;
}

// Link prototypes and add prototype methods
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);
Object.setPrototypeOf(Druid.prototype, Hero.prototype);
Object.setPrototypeOf(Bard.prototype, Hero.prototype);
  
Hero.prototype.greet = function () {
    return `${this.name} says hello.`;
}

Hero.prototype.presentation = function () {
    return `${this.name}'s level is ${this.level}.`;
}

  
Warrior.prototype.attack = function () {
    return `${this.name} attacks with the ${this.weapon}.`;
}
  
Healer.prototype.heal = function () {
    return `${this.name} casts ${this.spell}.`;
}

Druid.prototype.defend = function () {
    return `${this.name} plants ${this.seeds}. `
}

Bard.prototype.charm = function() {
    return `${this.name} gracefully plays the ${this.musicalInstrument}. `
}

// Initialize individual character instances
const hero1 = new Warrior('Bjorn', 1, 'axe');
const hero2 = new Healer('Kanin', 1, 'cure');
const hero3 = new Druid ('Panoramix', 2, 'oak seeds');
const hero4 = new Bard ('Echo', 2, 'violin');
const hero5 = new Warrior('Jinx', 5,'sword')
const hero6 = new Healer('Aurora', 5, 'resurrection spell');
const hero7 = new Druid ('Melissa', 2, 'poison ivy');
const hero8 = new Bard ('Harmony', 3, 'piano');

var events = document.getElementById('root');
var story = "<h1> The heroes of NewPalace </h1>" +
            "<p> Once upon a time, in a small village there were 4 heroes: "+ hero1.name + ", " + hero8.name + ", " + hero6.name + ", " + hero2.name + ". On a cold, winter morning a stranger appears: " + hero5.greet() +  
            " Bjorn doesn't trust this suspicious figure. " + hero1.attack() + " Preventing his move, " + hero5.attack() + " " + hero5.presentation() + " She is stronger, she wins the fight and Bjorn dies. She is unstoppable and heads off to continue her quest. Not so fast. " + hero8.charm() + " Harmony charms Jinx and takes control over her. " + hero6.heal() + " Bjorn is now safe and ready to execute Jinx. </p>";


events.innerHTML = story;
events.style.backgroundColor = "yellow";
