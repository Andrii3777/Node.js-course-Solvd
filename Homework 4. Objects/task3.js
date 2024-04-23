// Task 3: Object Property Getters and Setters

const bankAccount = {
    _balance: 1000,

    get formattedBalance() {
        return '$' + this._balance;
    },

    set balance(value) {
        this._balance = value;
    },

    transfer: function (targetBankAccount, amount) {
        if (typeof amount === 'number' && amount > 0) {
            this._balance -= amount;
            targetBankAccount._balance += amount;
        } else {
            throw new Error(`Invalid amount!`);
        }
    }
};

const targetBankAccount = {};
Object.setPrototypeOf(targetBankAccount, bankAccount);

bankAccount.balance = 2000;
targetBankAccount.balance = 3000;

console.log("bankAccount:", bankAccount.formattedBalance);
console.log("targetBankAccount:", targetBankAccount.formattedBalance);

bankAccount.transfer(targetBankAccount, 300);
console.log("Transfer $300:");
console.log("bankAccount:", bankAccount.formattedBalance);
console.log("targetBankAccount:", targetBankAccount.formattedBalance);