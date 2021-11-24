//Create more Heroe's categories like Warrior and Healer

//Add your own parameters to them

//Create for its constructor at least two object instances.


//Use your own prototypes and store your objects-informations

//Create a a div root Element as entry point as well inject some informations in the UI from object instancess

// Generate a random number between 2 and 10, including both 2 and 10
function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let value5 = generateRandomIntegerInRange(2, 10);


// Generate a random number between 2.5 and 10.75, including both 2.5 and 10.75
function generateRandomFloatInRange(min, max) {
    return (Math.random() * (max - min + 1)) + min;
}

let value6 = generateRandomFloatInRange(2.5, 10.75);

function Hero(name) {
    this.name = name;
    this.level =  generateRandomIntegerInRange(1, 3)
    this.hp = 100
    this.power = generateRandomIntegerInRange(1, 10) * this.level
    this.attack_speed = generateRandomFloatInRange(0.1, 2.5)
    this.reset = function () {
        this.attack_speed = generateRandomIntegerInRange(1, 10) * this.level
    }

    if(this.level == 5){
        console.log(`${this.name} has MAXIMUM POWER`)
    }
    
}
  
function Warrior(name, weapon) {
    Hero.call(this, name);
  
    this.weapon = weapon;    
}
  
function Healer(name, spell) {
    Hero.call(this, name);
  
    this.spell = spell;
}

function Mage(name, spell) {
    Hero.call(this, name)

    this.spell = spell
}


function Arena(team_A, team_B) {
    var round = 1
    var hitter = {
        attack_speed : 0
    }
    console.log("-----------------------WELCOME TO THE ARENA-----------------------")
    console.log("ALLIANCE")
    for (let member of team_A) {
        console.log(`CHARACTER: ${member.name}: HP:${member.hp} LEVEL:${member.level} STRENGTH:${member.power}`)
    }
    console.log("HORDE")
    for (let member of team_B) {
        console.log(`CHARACTER: ${member.name}: HP:${member.hp} LEVEL:${member.level} STRENGTH:${member.power}`)
    }
    while(team_A.length > 0 && team_B.length > 0) {
        console.log(`-----------------------ROUND${round}-----------------------`)
        for (let i = 0;  i < team_B.length + team_A.length; i++) {
            for (let member of team_A) {
                if (member.attack_speed > hitter.attack_speed){
                    hitter = member
                }
            }
            for (let member of team_B) {
                if (member.attack_speed > hitter.attack_speed){
                    hitter = member
                }
           }
           if (team_A.includes(hitter)){
               if (team_B.length == 0) {
                   break
               }
               let target = team_B[generateRandomIntegerInRange(0, team_B.length-1)]
               hitter.attack(target)
               if (target.hp <= 0) {
                   team_B.splice(target, 1)
                   console.log(`${target.name} is dead`)
                }
            }
            else {
                if (team_A.length == 0) {
                    break
                }
                let target = team_A[generateRandomIntegerInRange(0, team_A.length-1)]
                hitter.attack(target)
                if (target.hp <= 0) {
                    team_A.splice(target, 1)
                    console.log(`${target.name} is dead`)
                }
                
            }
            hitter.attack_speed = 0            
        }

        round += 1
        console.log("ALLIANCE STATUS")
        for(let member in team_A){ 
            team_A[member].reset()
            console.log(`CHARACTER: ${team_A[member].name}: HP:${team_A[member].hp}`)
            
        }
        console.log("HORDE STATUS")
        for(let member in team_B){ 
            team_B[member].reset()
            console.log(`CHARACTER: ${team_B[member].name}: HP:${team_B[member].hp}`)
        }
        if (team_B.length == 0){
            console.log("ALLIANCE WINS")
        } else {
            console.log("HORDE WINS")
        }
    }

}

  
// Link prototypes and add prototype methods
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);
Object.setPrototypeOf(Mage.prototype, Hero.prototype);

Hero.prototype.attack = function (enemy) { 
    enemy.hp -= this.power
    console.log(`${this.name} attacked ${enemy.name} for ${this.power}`)
    console.log(enemy.hp)
}


// Initialize individual character instances
const Alliance = [new Warrior("Uther","hammer"), new Healer("Ysuria","renew"), new Mage("Jaina Proudmoore","frostbolt")]
const Horde = [new Warrior("Grommash","axe"), new Healer("Deino","renew"), new Mage("Anastasia Hartwell","frostbolt")]

Arena(Alliance, Horde)

