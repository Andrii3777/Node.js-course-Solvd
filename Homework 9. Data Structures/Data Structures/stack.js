// Last In First Out
class Stack {
    constructor() {
        this.stack = [];
    }

    /**
     * Checks if the stack is empty.
     * @private
     * @throws {Error} Throws an error if the stack is empty.
     */
    _checkIfEmpty() {
        if (this.stack.length === 0) {
            throw new Error("Stack is empty!");
        }
    }

    /**
     * Pushes a value onto the stack.
     * @param {*} value - The value to push onto the stack.
     */
    push(value) {
        this.stack.push(value);
    }

    /**
     * Pops a value from the stack.
     * @returns {*} The value popped from the stack.
     * @throws {Error} Throws an error if the stack is empty.
     */
    pop() {
        this._checkIfEmpty();
        return this.stack.pop();
    }

    /**
     * Peeks at the top value of the stack without removing it.
     * @returns {*} The top value of the stack.
     * @throws {Error} Throws an error if the stack is empty.
     */
    peek() {
        this._checkIfEmpty();
        return this.stack[this.stack.length - 1];
    }

    /**
     * Gets the length of the stack.
     * @returns {number} The number of elements in the stack.
     */
    get length() {
        return this.stack.length;
    }
}

// MinMaxStack class to support retrieving the minimum and maximum values efficiently
class MinMaxStack {
    constructor() {
        this.stack = new Stack();
        this.minStack = new Stack();
        this.maxStack = new Stack();
    }

    /**
     * Checks if the main stack is empty.
     * @private
     * @throws {Error} Throws an error if the main stack is empty.
     */
    _checkIfEmpty() {
        if (this.stack.length === 0) {
            throw new Error("Stack is empty!");
        }
    }

    /**
     * Gets the minimum value in the stack.
     * @returns {*} The minimum value in the stack.
     * @throws {Error} Throws an error if the stack is empty.
     */
    getMin() {
        this._checkIfEmpty();
        return this.minStack.peek();
    }

    /**
     * Gets the maximum value in the stack.
     * @returns {*} The maximum value in the stack.
     * @throws {Error} Throws an error if the stack is empty.
     */
    getMax() {
        this._checkIfEmpty();
        return this.maxStack.peek();
    }

    /**
     * Pushes a value onto the stack and updates the min and max stacks.
     * @param {*} value - The value to push onto the stack.
     */
    push(value) {
        this.stack.push(value);

        if (this.minStack.length === 0 || value <= this.minStack.peek()) {
            this.minStack.push(value);
        } else {
            this.minStack.push(this.minStack.peek());
        }

        if (this.maxStack.length === 0 || value >= this.maxStack.peek()) {
            this.maxStack.push(value);
        } else {
            this.maxStack.push(this.maxStack.peek());
        }
    }

    /**
     * Pops a value from the stack and updates the min and max stacks.
     * @returns {*} The value popped from the stack.
     * @throws {Error} Throws an error if the stack is empty.
     */
    pop() {
        this._checkIfEmpty();
        this.minStack.pop();
        this.maxStack.pop();
        return this.stack.pop();
    }

    /**
     * Peeks at the top value of the stack without removing it.
     * @returns {*} The top value of the stack.
     * @throws {Error} Throws an error if the stack is empty.
     */
    peek() {
        this._checkIfEmpty();
        return this.stack.peek();
    }

    /**
     * Gets the length of the stack.
     * @returns {number} The number of elements in the stack.
     */
    get length() {
        return this.stack.length;
    }
}

module.exports = { Stack, MinMaxStack };