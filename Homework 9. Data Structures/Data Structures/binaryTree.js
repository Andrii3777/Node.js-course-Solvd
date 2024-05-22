class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    /**
     * Checks if the binary tree is empty.
     * @returns {boolean} True if the tree is empty, false otherwise.
     */
    isEmpty() {
        return this.root === null;
    }

    /**
     * Checks if the binary tree is empty and throws an error if it is.
     * @private
     * @throws {Error} Throws an error if the tree is empty.
     */
    #checkIfEmpty() {
        if (this.isEmpty()) {
            throw new Error("Binary Tree is empty!");
        }
    }

    /**
     * Inserts a new value into the binary tree.
     * @param {*} value - The value to insert.
     * @param {Node} [parentNode=null] - The parent node to attach the new node to.
     * @param {boolean} [isLeft=true] - Whether to attach the new node as a left child.
     * @throws {Error} Throws an error if parent node is not specified for non-root nodes.
     */
    insert(value, parentNode = null, isLeft = true) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            if (parentNode === null) {
                throw new Error("Parent node must be specified for non-root nodes.");
            }
            if (isLeft) {
                parentNode.left = newNode;
            } else {
                parentNode.right = newNode;
            }
        }
    }

    /**
     * Searches for a node with the specified value in the binary tree.
     * @param {*} value - The value to search for.
     * @returns {Node|null} The node with the specified value, or null if not found.
     * @throws {Error} Throws an error if the tree is empty.
     */
    search(value) {
        this.#checkIfEmpty();

        function find(node) {
            if (node === null || node.value === value) {
                return node;
            }
            return find(node.left) || find(node.right);
        }

        return find(this.root);
    }

    /**
     * Traverses the binary tree in in-order sequence and logs the values.
     * @param {Node} [node=this.root] - The starting node for traversal.
     */
    traverseInorder(node = this.root) {
        if (node == null) return;

        this.traverseInorder(node.left);
        console.log(node.value);
        this.traverseInorder(node.right);
    }

    /**
     * Traverses the binary tree in pre-order sequence and logs the values.
     * @param {Node} [node=this.root] - The starting node for traversal.
     */
    traversePreorder(node = this.root) {
        if (node == null) return;

        console.log(node.value);
        this.traversePreorder(node.left);
        this.traversePreorder(node.right);
    }

    /**
     * Traverses the binary tree in post-order sequence and logs the values.
     * @param {Node} [node=this.root] - The starting node for traversal.
     */
    traversePostorder(node = this.root) {
        if (node == null) return;

        this.traversePostorder(node.left);
        this.traversePostorder(node.right);
        console.log(node.value);
    }

    /**
     * Checks if the binary tree is a valid binary search tree (BST).
     * @returns {boolean} True if the tree is a valid BST, false otherwise.
     */
    isBinarySearchTree() {
        function validate(node, minVal, maxVal) {
            if (node === null) return true;
            if (node.value <= minVal || node.value >= maxVal) return false;

            return validate(node.left, minVal, node.value) && validate(node.right, node.value, maxVal);
        }

        return validate(this.root, -Infinity, Infinity);
    }

    /**
     * Prints the binary tree structure to the console.
     * @throws {Error} Throws an error if the tree is empty.
     */
    printTree() {
        this.#checkIfEmpty();

        function traverse(node, prefix, isLeft) {
            if (node !== null) {
                console.log(prefix + (isLeft ? "├── " : "└── ") + node.value);
                traverse(node.left, prefix + (isLeft ? "│   " : "    "), true);
                traverse(node.right, prefix + (isLeft ? "│   " : "    "), false);
            }
        }

        traverse(this.root, "", true);
    }
}

// Export the BinaryTree class for use in other modules
module.exports = { BinaryTree };3