// BankAccount class to represent bank account
class BankAccount {
    /**
     * Constructs a new BankAccount instance.
     * @param {string} name - The name of the account holder.
     * @param {string} email - The email of the account holder.
     * @param {string} accountId - The unique ID of the account.
     * @param {number} balance - The initial balance of the account (defaulted to 0 if not provided).
     */
    constructor(name, email, accountId, balance = 0) {
        this.name = name;
        this.email = email;
        this.accountId = accountId;
        this._balance = balance;
    }

    /**
     * Gets the formatted balance of the account.
     * @returns {string} The formatted balance with a dollar sign ('$').
     */
    get formattedBalance() {
        return '$' + this._balance;
    }

    /**
     * Sets the balance of the account.
     * @param {number} value - The new balance value to set.
     */
    set balance(value) {
        this._balance = value;
    }

    /**
     * Transfers a specified amount from this account to another account.
     * @param {number} amount - The amount to transfer.
     * @param {BankAccount} receiver - The receiver account.
     * @throws {Error} Throws an error if the sender does not have enough balance.
     */
    transfer(amount, receiver) {
        console.log(`\nProcessing payment of $${amount}...`);
        if (this._balance >= amount) {
            this._balance -= Number(amount);
            receiver._balance = Number(receiver._balance + amount);
        } else {
            throw new Error(`User does not have enough money!`);
        }
        console.log("Payment processed successfully!");
    }
}

module.exports = { BankAccount };
