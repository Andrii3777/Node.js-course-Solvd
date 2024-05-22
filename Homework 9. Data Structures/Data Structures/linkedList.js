class Node {
    /**
     * Constructs a new Node instance.
     * @param {*} value - The value of the node.
     * @param {Node} [next=null] - The next node in the linked list.
     */
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    length = 0;
    head = null;
    tail = null;

    /**
     * Checks if the linked list is empty.
     * @private
     * @throws {Error} Throws an error if the linked list is empty.
     */
    #checkIfEmpty() {
        if (this.length === 0) {
            throw new Error("LinkedList is empty!");
        }
    }

    /**
     * Checks if the given index is within the bounds of the linked list.
     * @private
     * @param {number} index - The index to check.
     * @throws {Error} Throws an error if the index is out of bounds.
     */
    #checkIndex(index) {
        if (index < 0 || index >= this.length) {
            throw new Error("Wrong index!");
        }
    }

    /**
     * Inserts a new value at the tail of the linked list.
     * @param {*} value - The value to insert.
     */
    insertToTail(value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }

        this.tail = newNode;
        this.length++;
    }

    /**
     * Inserts a new value at the head of the linked list.
     * @param {*} value - The value to insert.
     */
    insertToHead(value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            this.tail = newNode;
        } else {
            newNode.next = this.head;
        }

        this.head = newNode;
        this.length++;
    }

    /**
     * Inserts a new value at the specified index in the linked list.
     * @param {number} index - The index to insert the value at.
     * @param {*} value - The value to insert.
     * @throws {Error} Throws an error if the index is out of bounds.
     */
    insertByIndex(index, value) {
        if (index < 0 || index > this.length) {
            throw new Error("Wrong index!");
        }

        if (index === 0) {
            this.insertToHead(value);
        } else {
            const newNode = new Node(value);
            let curNode = this.head;

            for (let i = 1; i < index; i++) {
                curNode = curNode.next;
            }

            newNode.next = curNode.next;
            curNode.next = newNode;
            this.length++;
        }
    }

    /**
     * Deletes the head node of the linked list.
     * @returns {Node} The deleted head node.
     * @throws {Error} Throws an error if the linked list is empty.
     */
    deleteHead() {
        this.#checkIfEmpty();
        const deletedHead = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return deletedHead;
    }

    /**
     * Deletes the tail node of the linked list.
     * @returns {Node} The deleted tail node.
     * @throws {Error} Throws an error if the linked list is empty.
     */
    deleteTail() {
        this.#checkIfEmpty();
        if (this.length === 1) {
            return this.deleteHead();
        }

        let curNode = this.head;
        while (curNode.next !== this.tail) {
            curNode = curNode.next;
        }

        const deletedTail = this.tail;
        this.tail = curNode;
        this.tail.next = null;
        this.length--;
        return deletedTail;
    }

    /**
     * Deletes the node at the specified index in the linked list.
     * @param {number} index - The index of the node to delete.
     * @returns {Node} The deleted node.
     * @throws {Error} Throws an error if the linked list is empty or the index is out of bounds.
     */
    deleteFromIndex(index) {
        this.#checkIfEmpty();
        this.#checkIndex(index);

        if (index === 0) {
            return this.deleteHead();
        } else if (index === this.length - 1) {
            return this.deleteTail();
        } else {
            let curNode = this.head;

            for (let i = 1; i < index; i++) {
                curNode = curNode.next;
            }

            const deletedNode = curNode.next;
            curNode.next = deletedNode.next;

            this.length--;
            return deletedNode;
        }
    }

    /**
     * Finds the first node with the specified value in the linked list.
     * @param {*} value - The value to search for.
     * @returns {Node|null} The first node with the specified value, or null if not found.
     * @throws {Error} Throws an error if the linked list is empty.
     */
    find(value) {
        this.#checkIfEmpty();

        let curNode = this.head;
        while (curNode !== null) {
            if (curNode.value === value) {
                return curNode;
            }
            curNode = curNode.next;
        }
        return null;
    }

    /**
     * Gets the node at the specified index in the linked list.
     * @param {number} index - The index of the node to get.
     * @returns {Node} The node at the specified index.
     * @throws {Error} Throws an error if the linked list is empty or the index is out of bounds.
     */
    getByIndex(index) {
        this.#checkIfEmpty();
        this.#checkIndex(index);

        let curNode = this.head;

        for (let i = 0; i < index; i++) {
            curNode = curNode.next;
        }
        return curNode;
    }

    /**
     * Checks if the linked list contains a cycle.
     * @returns {Node|null} The node where the cycle begins, or null if there is no cycle.
     */
    hasCycle() {
        this.#checkIfEmpty();
        let slow = this.head;
        let fast = this.head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow === fast) {
                slow = this.head;
                while (slow !== fast) {
                    slow = slow.next;
                    fast = fast.next;
                }
                return slow;
            }
        }

        return null;
    }

    /**
     * Prints the linked list to the console.
     * @throws {Error} Throws an error if the linked list is empty.
     */
    print() {
        this.#checkIfEmpty();

        let i = 0;
        let curNode = this.head;
        while (curNode !== null) {
            console.log(`${i++}) ${curNode.value}`);
            curNode = curNode.next;
        }
    }
}

module.exports = { LinkedList };