// Task 3: Object Property Getters and Setters
// Implementing a task 3 using a class

class BankAccount {
    constructor(balance = 1000) {
        this._balance = balance;
    }

    get formattedBalance() {
        return '$' + this._balance;
    }

    set balance(value) {
        this._balance = value;
    }

    transfer(targetBankAccount, amount) {
        if (typeof amount === 'number' && amount > 0) {
            this._balance -= amount;
            targetBankAccount._balance += amount;
        } else {
            throw new Error(`Invalid amount!`);
        }
    }
}

const bankAccount = new BankAccount();
const targetBankAccount = new BankAccount();

bankAccount.balance = 2000;
targetBankAccount.balance = 3000;

console.log("bankAccount:", bankAccount.formattedBalance);
console.log("targetBankAccount:", targetBankAccount.formattedBalance);

bankAccount.transfer(targetBankAccount, 300);
console.log("Transfer $300:");
console.log("bankAccount:", bankAccount.formattedBalance);
console.log("targetBankAccount:", targetBankAccount.formattedBalance);