//In JavaScript, there are two main ways to create an object — the literal notation and the constructor function, class constructor.
//Objects created using object literals are singletons. This means when a change is made to the object, it affects that object across the entire script. 
//Object defined with a function constructor let us have multiple instances of that object.
//This means change made to one instance, will not affect other instances.



//Class Constructor 
//BluePrint Syntax Sugar behind classes are awlays


class Laptops {
    constructor(model,age,color) {
        this.model = model;
        this.age = age;
        this.color = color;
    }
}

//New instance of Laptops Class Constructor
const Lenovo = new Laptops('Hz745','2','black')

//Object Literal Notation


const firstMember = {
    name: 'Kwstas',
    email: 'kwstas@test.gr',
    age: 25,
    dob: '08/02/1989',
    active: true
};


const secondMember = {
    name: 'Gianis',
    email: 'gianis@test.gr',
    age: 22,
    dob: '08/02/1989',
    active: true
};


//Object is not  STRING charachter.
//This means, if you want to log them you need to iterate through or parse them to string in some cases.
console.log(firstMember + secondMember) // [object][object] not accesibly as a string.The result is 2 arrays of Objects





// Use a placeholder variable to createa a blank space.
var placeholder = ''; //Empty slot - empty string

var person = {fname : 'Teo', sname: 'Koralis', age: 24} //Object Literal Notation

// console.log(Object.keys(person)) //Returns an array with Person Keys    

// iterate over the member's objects and console the results to see what's happening..(ES5)

for(var x in person) {
    // placeholder +=person[x] + '';
    console.log(person[x] + '')
}


// iterate over the member's objects console the results to see what's happening.. (*ES6 Modules )
//
for (const key in firstMember) {
    console.log(`${key}: ${firstMember[key]}`);
}




//Lets see another example of iterating


const courses = {

    java: 10,
    javascript: 55,
    nodejs: 5,
    php: 15
}

const Food = {

    foodName : 'μπιφτέκια',
    avrgCookingTime : '25 minutes',
    recipe : 'Burn them..'

}

const foodKeys = Object.keys(Food)
console.log(foodKeys)

//We use Object.keys() method to find the courses keys and return them as an array.
// convert object to key's array
const keys = Object.keys(courses);



// print all keys
console.log(keys);
// [ 'java', 'javascript', 'nodejs', 'php' ]


// iterate over object with forEach./ Take a look.
keys.forEach((key, index) => {
    console.log(`${key}: ${courses[key]}`);
});

// java: 10
// javascript: 55
// nodejs: 5
// php: 15


// Object Notations without infos parsed after.
let Villages = {

    name: this.name,
    sirName: this.sirName,
    phone: this.phone,
}

Villages.name = 'Dimitris'
Villages.sirName = 'Chitas'
Villages.phone = 693434141




//Object Literal Notation Props are Global,function constructor not Global

const website = {
    id: 10,
    portal : 'portal',
    url: 'htpps://www.google.gr',
    printUrlToConsole: function() {
        console.log(this.portal)
    }
}
//Use printUrlToConsole method from website object

console.log(website.printUrlToConsole())

//BankAccount Func_Constructor with two functions added in the prototype.


function BankAccount(fullName,balance) {

    this.fullName = fullName;
    this.balance = balance;
   
}

BankAccount.prototype.deposit = function(x) {
    
    this.balance += x;


}

BankAccount.prototype.widthdraw = function(x) {
  if(x <= this.balance) {
      this.balance -= x;
  } else {
      return { 
          error : 'Not enough Balance',
          type : alert('Your ballance is out of range')
      }
  }
}

const Maria =  new BankAccount('Dimitris', 50)
Maria.widthdraw(20); // Accepts the transfer

//Maria.widthdraw(70) // Returns error as an alert,try it!

console.log(Maria.balance)






//Literal Notation

const BankAccount2 = {
    
    fullName : 'Giorgos Karaiskos',
    balance: 100,

    deposit : function(x) {
        this.balance += 150;
    },

    widthraw: function(x) {
        if(x <= this.balance) {
            this.balance -= x;
        } else {
            return { 
                error : 'Not enough Balance',
                type : 1
            }
        }
    }
}













//TIP OF THE DAY BIND METHOD,HANDY USAGE! 


//We can use bind method to access nested methods from object notations,otherwise on the global scope we recieve undefined as they are private.


const module = {
    x: 42,
    y: 15,
    getX: function() {
    return  this.x;
    }
  };
  
  const unboundGetX = module.getX;
  console.log(unboundGetX()); // The function gets invoked at the global scope
  // expected output: undefined
  
  const boundGetX = unboundGetX.bind(module);
  console.log(boundGetX());
  // expected output: 42
  
//Methods in Object constructors.
  function Marvel(hero,color) {

    this.hero = hero;
    this.color = color;
    this.getChamp = function () {return console.log(this.hero)}

  }

  let Batman = new Marvel('Spiderman','blue','Spiderman') 
  console.log(Batman.getChamp())




  //Prototype Explanation 

  //https://www.youtube.com/watch?v=evACeKnMCrU