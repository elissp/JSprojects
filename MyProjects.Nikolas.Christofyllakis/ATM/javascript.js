 
 
 function BankAccount(name,balance) {

    this.name = name;   
    this.balance = balance;
 }


BankAccount.prototype.deposit = function(x) {
    this.balance += x;
}

BankAccount.prototype.withdraw = function(x) {
if (x <= this.balance) {
    this.balance -= x;
} else {
         alert('NOt enough balance')
    
  }
}

const Nikos = new BankAccount("Nikos" , 69)
Nikos.withdraw(68);

console.log(Nikos.balance);

