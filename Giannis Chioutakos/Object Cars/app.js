//* 1. Using Object Literals or Object Initializers 

var car  = {
    make: 'Ford',
    model: 'Fiesta',
    year: 1998,
    getAllCarDetails: function() {
        return `${this.make}, ${this.model}, ${this.year} `;
    }
}

console.log(car);
console.log(car.getAllCarDetails());



//* 2. Using a Construction Function

function Construnction_Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.getAllCarDetails = function() {
        return `${this.make}, ${this.model}, ${this.year}`;
    }
}


const car1 = new Construnction_Car('Ford', 'Fiesta', 1998);
console.log(car1);
console.log(car1.getAllCarDetails());




//* 3. Object Create

const superCar = {
    carDetails: function() {
        return `${this.make}, ${this.model}, ${this.year}`;
    }
}

const superCar1 = Object.create(superCar) 
superCar1.make = 'Ferrari';
superCar1.model = 'La srada';
superCar1.year = '2003';
superCar1.carDetails();

console.log(superCar1.carDetails());



    


