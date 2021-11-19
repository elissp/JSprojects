/*  object literal  */

var myCar = {
    make: "audi",
    model: "A3",
    year: "2010"
};

/*  object initializer  */

var myCar = new Object();
myCar.make = "audi";
myCar.model = "A3";
myCar.year = "2010";


/*  object constractor  */

function cars(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const myCar = new cars("audi", "A3", "2010");

/*  object create  */

var Car = {
    make = "seat",
    model = "cordoba",
    year = "1994"
};

var myCar = Object.create(Car);
myCar.make = "audi";
myCar.model = "A3";
myCar.year = "2010";



