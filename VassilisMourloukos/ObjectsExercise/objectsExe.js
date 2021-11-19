var myCar = {
    Brand: "Porsche",
    Model: "911 Carrera 4 GTS",
    Age: 2017 , 
    Engine : {
      noOfCylinders : 6 ,
      Power : 450 + "hp",
      Torque: 405 + "lb * ft"
    }
}

var myCar2 = new Object() ;
myCar2.Brand = "Fiat";
myCar2.Model = "Pundo";
myCar2.Age = 2018;
myCar2.Engine = {
    noOfCylinders : 4 ,
    Power : 90 +"hp",
    Torque : 209 + "lb * ft"

}

var myCar3 = Object.create({});
myCar3.Brand = "Jaguar";
myCar3.Model = "E-Type";
myCar3.Age = 1961 ;
myCar3.Engine = {
    noOfCylinders : 6,
    Power: 256 +"hp",
    Torque : 260 + "lb * ft"
}

function Cars(Brand, Model, Age, Engine) {
    this.Brand = Brand ;
    this.Model = Model ;
    this.Age = Age;
    this.Engine= Engine;
}

const alphaRomeo = new Cars("AlphaRomeo","Giulia","2021",{noOfCylinders: 4 , Power: 280 +"hp",Torque:306 +"lb *ft"});
console.log (myCar,myCar2,myCar3,alphaRomeo);
