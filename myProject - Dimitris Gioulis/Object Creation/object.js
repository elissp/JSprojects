// Create an object named myCar and give it properties named make, model, and year (use your
//favorite car)

// with :
// object initializer
// constructor function 
// create method 


// leteral 
const myCar = {
  brand : "Ford",
  model : "Mustang",
  year : "1969"
}
console.log(myCar);
// constructor 

function newCar(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year
}

const audi = new newCar("Audi", "RS5", "2019");

console.log(audi);

//Object create method

var myNewCar = {
  brand : "Ford",
  model : "Mustang",
  year : "1969"
}

var ford = Object.create(myNewCar);
ford.brand = "Ford";
ford.model = "Focus";
ford.year = "2020";
console.log(ford);