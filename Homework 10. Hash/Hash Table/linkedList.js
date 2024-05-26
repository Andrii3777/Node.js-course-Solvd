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
     * Finds a node in the linked list that satisfies the provided callback function.
     * @param {Function} callback - The callback function to test each node.
     * @returns {Node|null} - The found node, or null if not found.
     */
    find(callback) {
        let curNode = this.head;
        while (curNode !== null) {
            if (callback(curNode.value)) {
                return curNode;
            }
            curNode = curNode.next;
        }
        return null;
    }

    /**
     * Deletes a node from the linked list that satisfies the provided callback function.
     * @param {Function} callback - The callback function to test each node.
     * @returns {Node|null} - The deleted node, or null if not found.
     */
    delete(callback) {
        if (this.length === 0) return null;
        if (callback(this.head.value)) {
            const deletedHead = this.head;
            this.head = this.head.next;
            this.length--; // Decrement the length of the linked list
            if (this.length === 0) {
                this.tail = null;
            }
            return deletedHead;
        }
        let curNode = this.head;
        while (curNode.next !== null) { // Iterate through the linked list until the second last node
            if (callback(curNode.next.value)) {
                const deletedNode = curNode.next;
                curNode.next = deletedNode.next; // Skip the next node by updating the next reference
                if (deletedNode === this.tail) {
                    this.tail = curNode;
                }
                this.length--;
                return deletedNode;
            }
            curNode = curNode.next;
        }
        return null;
    }
}

module.exports = { LinkedList };
