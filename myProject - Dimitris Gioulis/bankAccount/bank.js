// ballance 100 e
//functions 


//consructor

var firstName = "Dimitris";
var lastName = "Gioulis";
var balance = 100;


function bankAccount (firstName, lastName, balance, deposit, withdraw) {

  this.firstName = firstName;
  this.lastName = lastName;
  this.balance = balance; 
  this.deposit = deposit;
  this.withdraw = withdraw;
}
function deposit(amount) {
  this.balance = this.balance + amount;
}

function withdraw(amount) {
  if (this.balance > amount) {
    this.balance = this.balance -amount
  } else {
    console.log("You can't make the retrieval");
  }
}

const myAccount = new bankAccount(firstName, lastName, balance, deposit, withdraw)


// leteral

const myBankAccount = {
  firstName : firstName,
  lastName : lastName,
  balance : balance,
  deposit : deposit,
  withdraw : withdraw,
}

myAccount.deposit(10);
console.log(myAccount);

myAccount.withdraw(20);
console.log(myAccount);