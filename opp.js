class BankAccount {

    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log("Money Added:", amount);
    }

    showBalance() {
        console.log("Name:", this.name);
        console.log("Balance:", this.balance);
    }

}

let user1 = new BankAccount("Rahul", 1000);

user1.deposit(500);

user1.showBalance();