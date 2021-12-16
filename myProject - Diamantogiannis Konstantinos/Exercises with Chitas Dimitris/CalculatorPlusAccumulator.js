
// EXERCISE 1st

function Calculator() {
    
    this.read = function(){

        this.x = +prompt("Give 1st number", "4");
        this.y = +prompt("Give 2nd number", "6");
        return this.x , this.y
    };

    this.sum = function(){
        return this.x + this.y
    };

    this.mul = function(){
        return this.x * this.y
    }


};

let calculator = new Calculator();
calculator.read();
alert("Sum= "+calculator.sum());
alert("Mul= "+calculator.mul());


// EXERCISE 2nd


function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function(){
        this.number = parseInt(prompt("Give me number", "4"));
        this.value = +this.number + +this.value
        return this.value;
    };
};

let accumulator = new Accumulator("5");
accumulator.read();
accumulator.read();
accumulator.read();
console.log(accumulator)
