class Queue {
    constructor() {
        this.queue = [];
    }

    /**
     * Checks if the queue is empty.
     * @private
     * @throws {Error} Throws an error if the queue is empty.
     */
    #checkIfEmpty() {
        if (this.queue.length === 0) {
            throw new Error("Queue is empty!");
        }
    }

    /**
     * Adds a value to the end of the queue.
     * @param {*} value - The value to enqueue.
     */
    enqueue(value) {
        this.queue.push(value);
    }

    /**
     * Removes and returns the value at the front of the queue.
     * @returns {*} The value dequeued from the front of the queue.
     * @throws {Error} Throws an error if the queue is empty.
     */
    dequeue() {
        this.#checkIfEmpty();
        return this.queue.shift();
    }

    /**
     * Returns the value at the front of the queue without removing it.
     * @returns {*} The value at the front of the queue.
     * @throws {Error} Throws an error if the queue is empty.
     */
    peek() {
        this.#checkIfEmpty();
        return this.queue[0];
    }

    /**
     * Gets the number of elements in the queue.
     * @returns {number} The size of the queue.
     */
    get size() {
        return this.queue.length;
    }

    /**
     * Checks if the queue is empty.
     * @returns {boolean} True if the queue is empty, false otherwise.
     */
    isEmpty() {
        return this.queue.length === 0;
    }
}

module.exports = { Queue };