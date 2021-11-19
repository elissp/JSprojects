function Cars(brand,age,model) {
    this.brand=brand;
    this.age=age;
    this.model=model;
}


const Volkswagen = new Cars("Volkswagen","2001","Golf")
console.log(Volkswagen)

const Fiat = new Cars("Fiat","2008","Panda")
console.log(Fiat)

const Audi = new Cars("Audi","2004","TT")
console.log(Audi)

const Fiat1 = new Cars("Fiat","2009","Panda")
console.log(Fiat1)


const CarsLiteral = {
    brand: "Audi",
    age: 2008,
    model: "TT",
}

var myCar = {brand: "Audi", age: 2008, model:"TT"};