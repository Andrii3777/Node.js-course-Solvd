const { RedBlackTree } = require('./RedBlackTree');

/**
 * Searches for a node with the specified value in the Red-Black Tree.
 * This method traverses the tree starting from the root node to find a node with the given value.
 * @param {*} value - The value to search for.
 * @returns {Node|null} - The node with the specified value if found, otherwise returns null.
 */
RedBlackTree.prototype.search = function(value) {
    let currentNode = this.root;

    // Traverse the tree until reaching a null leaf node or finding the target value
    while (currentNode !== this.blackNullNode && value !== currentNode.value) {
        if (value < currentNode.value) {
            currentNode = currentNode.left;
        } else {
            currentNode = currentNode.right;
        }
    }

    // Return the found node or null if not found
    return currentNode !== this.blackNullNode ? currentNode : null;
}
