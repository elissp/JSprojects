function Bank_Account(owner_name, balance){
    this.owner_name = owner_name
    this.balance = balance
    this.deposit = function (amount){
        this.balance += amount
        console.log(`Your new balance is ${this.balance} euro`)
    }
    this.withdraw = function (amount){
        if (amount > balance){
            alert(`Your current balance ${balance} is smaller than the amount you want to withdraw ${amount}`)
        }
        else {
            this.balance -= amount
            console.log(`Your new balance is ${this.balance} euro`)}
    }
    
    
}

var myAccount = new Bank_Account("fotis",100)
myAccount.deposit(50)
myAccount.withdraw(90)
myAccount.withdraw(130)