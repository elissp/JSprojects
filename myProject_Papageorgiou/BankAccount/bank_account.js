function BankAccount (ownerName, balance) {
    this.ownerName = ownerName;
    this.balance = balance;
}
// const client1 = new BankAccount ("Ben", 100);

BankAccount.prototype.deposit = function (deposit){
    return this.balance + deposit;
}

BankAccount.prototype.withdrawal = function (withdrawal) {
    if (withdrawal > this.balance) {
        return alert("error!");
    } 
    else {
    return this.balance - withdrawal;
    }
}

// console.log(client1.deposit(50));
// console.log(client1.withdrawal(200));
// console.log(client1.withdrawal(50));