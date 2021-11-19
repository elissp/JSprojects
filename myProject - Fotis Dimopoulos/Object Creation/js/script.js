// Object Literal

const myCar = {
    brand: "Seat",
    model: "Ibiza",
    color: "Grey",
    year: "2003"
  }
  
  console.log(myCar);
  


  // Object Constructor
  
  function myCar2(brand,model,color,year){
    
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.year = year;
  }
  
  const Seat = new myCar2("Seat","Ibiza","Grey","2003")
  console.log(Seat);



  // Object.create method

const car = {
  brand: "Audi",
  model: "A3",
  color: "Black",
  year: "2001"
}

const myCar3 = Object.create(car);

myCar3.brand = "Seat",
myCar3.model = "Ibiza",
myCar3.color = "Grey",
myCar3.year = "2003"

console.log(myCar3);
