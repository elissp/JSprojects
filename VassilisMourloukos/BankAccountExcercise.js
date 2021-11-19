//Object constructor method

function BankAcount(OwnerName,Balance,Withdraw,Deposit){
    this.OwnerName = OwnerName;
    this.Balance = Balance;
    this.Withdraw =function() {
        var userInput =parseInt(prompt("Please enter the requested ammount "));
            while(isNaN(userInput)){
                console.log ("Enter a number ");
            }
            if(userInput>this.Balance){
                alert("Not enought funds ");
               
            }
            else{
                this.Balance = this.Balance - userInput;
            }
            console.log(this.Balance);
    };
    this.Deposit = function() {
        var userInput =parseInt(prompt("Please enter the requested ammount "));
        while(isNaN(userInput)){
            console.log ("Enter a number ");
        }
        this.Balance = this.Balance + userInput ;
        console.log(this.Balance);
    }
    
}


const VaggelisMarinakisPsila = new BankAcount("Vaggelis Marinakis",1000000,BankAcount.Withdraw,BankAcount.Deposit);

VaggelisMarinakisPsila.Withdraw();
VaggelisMarinakisPsila.Deposit();

//Direct Method
var anotherBankAccount = {
    Name:"Dimitris Gianakopoulos",
    Balance : 100,
    Withdraw : function() {
        var userInput =parseInt(prompt("Please enter the requested ammount "));
            while(isNaN(userInput)){
                console.log ("Enter a number ");
            }
            if(userInput>this.Balance){
                alert("Not enought funds ");
               
            }
            else{
                this.Balance = this.Balance - userInput;
            }
            console.log(this.Balance);
} ,
    Deposit: function() {
        var userInput =parseInt(prompt("Please enter the requested ammount "));
        while(isNaN(userInput)){
            console.log ("Enter a number ");
        }
        this.Balance = this.Balance + userInput ;
        console.log(this.Balance);
    }
    
}
anotherBankAccount.Deposit();


