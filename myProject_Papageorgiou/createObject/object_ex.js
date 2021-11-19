/*Create an object named myCar and give it properties named make, model, and year (use your
favorite car)
Create objects through:
-Using an object initializer.
-Using a constructor function and then instantiate an object invoking that function in conjunction with the
new operator.
-Using the objects.create method*/

//Object literal
const Car = {
    brand:'Hyundai',
    model:'Lantra',
    year:'1995'
}

//Object Constructor
function Cars (brand,model,year){
    this.brand = brand;
    this.model = model;
    this.year = year;
}

const Hyundai = new Cars('Hyundai','Lantra','1995');

// Object.create method
var Car = {
    brand:'Hyundai',
    model:'Lantra',
    year:'1995'
}

var Lantra = Object.create(Car);
Lantra.brand = 'Hyundai';
Lantra.model = 'Lantra';
Lantra.year =  '1995';