//Object Constructor

function carConstructor(brand,model,color,year) {

    this.brand = brand;
    this.model = model;
    this.color = color;
    this.year = year;
}

const Citroen = new carConstructor("Citroen","C3", "White", "2019");
console.log(Citroen);

//Object literal

const Seat = {

    brand: "Seat",
    model: "Ibiza",
    color: "Silver",
    year: "2003"
}

console.log(Seat);

//Object creation

const car = {

    brand: "brand",
    model: "model",
    color: "color",
    year: "year"
}

const Skoda = Object.create(car);

Skoda.brand = "Skoda",
Skoda.model = "Octavia",
Skoda.color = "Black",
Skoda.year = "2010";

console.log(Skoda);
