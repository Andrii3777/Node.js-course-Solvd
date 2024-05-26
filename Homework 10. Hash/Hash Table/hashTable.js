const { LinkedList } = require('./linkedList');

class CustomHashTable {
    /**
     * Initializes a new hash table with a given initial capacity.
     * @param {number} [initialCapacity=100] - The initial capacity of the hash table.
     */
    constructor(initialCapacity = 100) {
        this.capacity = initialCapacity; // Initial capacity of the hash table
        this.curLength = 0; // Current number of key-value pairs in the hash table
        this.newCapacityCoef = 2; // Coefficient to multiply the capacity by when resizing
        this.loadFactor = 0.7; // Load factor to determine when to resize the hash table
        this.hashTable = Array(this.capacity).fill(null).map(() => new LinkedList()); // Array of linked lists to handle collisions
    }

    /**
     * Generates a hash value for a given key.
     * @param {string} key - The key to hash.
     * @returns {number} - The hash value.
     */
    hash(key) {
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
            hashValue ^= (hashValue >> 2) + key.charCodeAt(i);
        }

        return Math.abs(hashValue) % this.capacity;
    }

    /**
     * Resizes the hash table when the load factor is exceeded.
     */
    resize() {
        this.capacity = this.capacity * this.newCapacityCoef; // Increase the capacity
        const newHashTable = Array(this.capacity).fill(null).map(() => new LinkedList()); // Create a new hash table with the new capacity

        // Rehash all existing key-value pairs into the new hash table
        for (const linkedList of this.hashTable) {
            let curNode = linkedList.head;
            while (curNode !== null) {
                const index = this.hash(curNode.value[0]);
                newHashTable[index].insertToTail(curNode.value);
                curNode = curNode.next;
            }
        }

        this.hashTable = newHashTable;
    }

    /**
     * Inserts a key-value pair into the hash table.
     * @param {string} key - The key to insert.
     * @param {*} value - The value to insert.
     */
    insert(key, value) {
        if (this.curLength / this.capacity > this.loadFactor) {
            this.resize();
        }

        const index = this.hash(key);
        const linkedList = this.hashTable[index];
        const existingNode = linkedList.find(item => item[0] === key);
        if (existingNode) {
            existingNode.value[1] = value; // Update the value if the key already exists
        } else {
            linkedList.insertToTail([key, value]);
            this.curLength++;
        }
    }

    /**
     * Retrieves a value by key from the hash table.
     * @param {string} key - The key to retrieve.
     * @returns {*} - The value associated with the key, or undefined if the key is not found.
     */
    get(key) {
        const index = this.hash(key);
        const linkedList = this.hashTable[index];
        const node = linkedList.find(element => element[0] === key);
        return node ? node.value[1] : undefined;
    }

    /**
     * Deletes a key-value pair from the hash table.
     * @param {string} key - The key to delete.
     * @returns {*} - The deleted value, or undefined if the key is not found.
     */
    delete(key) {
        const index = this.hash(key);
        const linkedList = this.hashTable[index];
        const deletedNode = linkedList.delete(item => item[0] === key);
        if (deletedNode) {
            this.curLength--;
        }

        return deletedNode ? deletedNode.value[1] : undefined;
    }

    /**
     * Prints all key-value pairs in the hash table.
     */
    print() {
        for (let i = 0; i < this.capacity; i++) {
            const linkedList = this.hashTable[i];
            let curNode = linkedList.head;
            while (curNode !== null) {
                console.log(`Key: ${curNode.value[0]}, Value: ${curNode.value[1]}`);
                curNode = curNode.next;
            }
        }
    }

    /**
     * Finds the maximum number of collisions in the hash table.
     * @returns {number} - The maximum number of collisions.
     */
    maxCollisions() {
        let maxCollisions = 0;
        for (const bucket of this.hashTable) {
            if (bucket.length > maxCollisions) {
                maxCollisions = bucket.length;
            }
        }
        return maxCollisions;
    }
}

module.exports = { CustomHashTable };