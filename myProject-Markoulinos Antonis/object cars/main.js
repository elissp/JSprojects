// Object Literal

const myCar = {

    name: 'fiat',
    model: 'tempra',
    year: '1990',
      
  }
  console.log(myCar)

// Object Constructor

  function Cars (name, model, year){
  
    this.name= name;
    this.model = model ;
    this.year= year;
  }

  const Fiat = new Cars('Fiat','tempra','2000');
    console.log(Fiat)

// Object.create method

const car = {
    name: 'fiat',
    model: 'tempra',
    year: '1990',
}

const myFiat = Object.create(car);

myFiat.name = "fiat";
myFiat.model = "tempra";
myFiat.year = "1990";

console.log(myFiat);



