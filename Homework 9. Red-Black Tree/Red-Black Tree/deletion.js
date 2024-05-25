const { RedBlackTree } = require('./RedBlackTree');

/**
 * Deletes the node with the given value from the Red-Black Tree.
 * @param {*} value - The value to delete from the tree.
 */
RedBlackTree.prototype.delete = function(value) {
    let targetNode = this._findNodeToDelete(value);

    if (targetNode === this.blackNullNode) {
        console.log(`Couldn't find node with ${value} in the tree`);
        return;
    }

    this._performDeletion(targetNode);
}

/**
 * Finds the node to delete with the given value in the Red-Black Tree.
 * @param {*} value - The value of the node to delete.
 * @returns {Node} The node to delete.
 */
RedBlackTree.prototype._findNodeToDelete = function(value) {
    let currentNode = this.root;
    let targetNode = this.blackNullNode;

    while (currentNode !== this.blackNullNode) {
        if (currentNode.value === value) {
            targetNode = currentNode;
        }
        currentNode = (currentNode.value <= value) ? currentNode.right : currentNode.left;
    }

    return targetNode;
}

/**
 * Performs deletion of the target node from the Red-Black Tree.
 * This method handles the deletion of a node from the Red-Black Tree and ensures that
 * the tree maintains its properties after the deletion operation.
 * @param {Node} targetNode - The node to delete.
 */
RedBlackTree.prototype._performDeletion = function(targetNode) {
    // Initialize variables
    let nodeToFix;
    let originalColor = targetNode.color;

    // Case 1: If the target node has no left child
    if (targetNode.left === this.blackNullNode) {
        nodeToFix = targetNode.right;
        this._transplant(targetNode, targetNode.right); // Replace targetNode with its right child
    }
    // Case 2: If the target node has no right child
    else if (targetNode.right === this.blackNullNode) {
        nodeToFix = targetNode.left;
        this._transplant(targetNode, targetNode.left); // Replace targetNode with its left child
    }
    // Case 3: If the target node has both left and right children
    else {
        // Find the minimum node in the right subtree of the target node
        let replacementNode = this._minimum(targetNode.right);
        originalColor = replacementNode.color;
        nodeToFix = replacementNode.right;

        // If the replacement node is not the right child of the target node
        if (replacementNode.parent !== targetNode) {
            this._transplant(replacementNode, replacementNode.right);
            replacementNode.right = targetNode.right;
            replacementNode.right.parent = replacementNode;
        }
        this._transplant(targetNode, replacementNode);
        replacementNode.left = targetNode.left;
        replacementNode.left.parent = replacementNode;
        replacementNode.color = targetNode.color;
    }

    if (originalColor === 'BLACK') {
        this._fixDelete(nodeToFix);
    }
}

/**
 * Replaces one subtree as a child of its parent with another subtree.
 * @param {Node} nodeToRemove - The node to remove.
 * @param {Node} newNode - The node to replace.
 */
RedBlackTree.prototype._transplant = function(nodeToRemove, newNode) {
    if (nodeToRemove.parent === null) {
        this.root = newNode;
    } else if (nodeToRemove === nodeToRemove.parent.left) {
        nodeToRemove.parent.left = newNode;
    } else {
        nodeToRemove.parent.right = newNode;
    }
    newNode.parent = nodeToRemove.parent;
}

/**
 * Finds the minimum node in a subtree rooted at a given node.
 * @param {Node} node - The root node of the subtree.
 * @returns {Node} The minimum node in the subtree.
 */
RedBlackTree.prototype._minimum = function(node) {
    while (node.left !== this.blackNullNode) {
        node = node.left;
    }
    return node;
}
/**
 * Fixes any violations of the Red-Black Tree properties after node deletion.
 * @param {Node} node - The node to start fixing violations from.
 */
RedBlackTree.prototype._fixDelete = function(node) {
    while (node !== this.root && node.color === 'BLACK') {
        if (node === node.parent.left) {
            node = this._fixDeleteLeftChild(node);
        } else {
            node = this._fixDeleteRightChild(node); // Fix case when node is the right child
        }
    }
    node.color = 'BLACK';
}

/**
 * Handles the first case of fixing delete violations when node is the left child.
 * Case 1: The sibling of node is red.
 * This case is handled by recoloring and performing a left rotation.
 * This transformation ensures that the sibling of node becomes black,
 * allowing us to proceed to further cases where the sibling is black.
 * @param {Node} node - The node to fix.
 * @returns {Node} The node after fixing the case.
 */
RedBlackTree.prototype._fixDeleteLeftChild = function(node) {
    let sibling = node.parent.right;
    if (sibling.color === 'RED') {
        sibling.color = 'BLACK';
        node.parent.color = 'RED';
        this._leftRotate(node.parent);
        sibling = node.parent.right;
    }
    return this._fixDeleteCase2(node);
}

/**
 * Handles the second case of fixing delete violations when node is the left child.
 * Case 2: The sibling of node is black, and both of the sibling's children are black.
 * This case is resolved by recoloring the sibling to red and moving the issue up to the parent.
 * If the parent is black, this may cause further violations, which will be handled in the next iteration.
 * @param {Node} node - The node to fix.
 * @returns {Node} The node after fixing the case.
 */
RedBlackTree.prototype._fixDeleteCase2 = function(node) {
    let sibling = node.parent.right;
    if (sibling.left.color === 'BLACK' && sibling.right.color === 'BLACK') {
        sibling.color = 'RED';
        node = node.parent;
    } else {
        return this._fixDeleteCase3(node);
    }
    return node;
}

/**
 * Handles the third case of fixing delete violations when node is the left child.
 * Case 3: The sibling of node is black, the sibling's left child is red, and the sibling's right child is black.
 * This case is fixed by recoloring and performing a right rotation on the sibling.
 * This ensures that the sibling's right child becomes red, transforming the situation into case 4.
 * @param {Node} node - The node to fix.
 * @returns {Node} The node after fixing the case.
 */
RedBlackTree.prototype._fixDeleteCase3 = function(node) {
    let sibling = node.parent.right;
    if (sibling.right.color === 'BLACK') {
        sibling.left.color = 'BLACK';
        sibling.color = 'RED';
        this._rightRotate(sibling);
        sibling = node.parent.right;
    }
    return this._fixDeleteCase4(node);
}

/**
 * Handles the fourth case of fixing delete violations when node is the left child.
 * Case 4: The sibling of node is black, and the sibling's right child is red.
 * This case is fixed by recoloring and performing a left rotation on the parent of node.
 * This ensures that the subtree rooted at the parent of node is balanced and adheres to Red-Black Tree properties.
 * @param {Node} node - The node to fix.
 * @returns {Node} The root of the tree.
 */
RedBlackTree.prototype._fixDeleteCase4 = function(node) {
    let sibling = node.parent.right;
    sibling.color = node.parent.color;
    node.parent.color = 'BLACK';
    sibling.right.color = 'BLACK';
    this._leftRotate(node.parent);
    return this.root;
}

/**
 * Handles the fifth case of fixing delete violations when node is the right child.
 * Case 5: The sibling of node is black, and the sibling's right child is red.
 * This case is fixed by recoloring and performing a right rotation on the parent of node.
 * @param {Node} node - The node to fix.
 * @returns {Node} The root of the tree.
 */
RedBlackTree.prototype._fixDeleteRightChild = function(node) {
    let sibling = node.parent.left;
    if (sibling.left.color === 'BLACK') {
        sibling.right.color = 'BLACK';
        sibling.color = 'RED';
        this._leftRotate(sibling);
        sibling = node.parent.left;
    }
    sibling.color = node.parent.color;
    node.parent.color = 'BLACK';
    sibling.left.color = 'BLACK';
    this._rightRotate(node.parent);
    return this.root;
}
