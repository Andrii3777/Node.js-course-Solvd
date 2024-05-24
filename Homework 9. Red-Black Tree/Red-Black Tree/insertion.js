const { RedBlackTree, Node } = require('./RedBlackTree');

/**
 * Inserts a new node with the given value into the Red-Black Tree.
 * @param {*} value - The value to insert into the tree.
 */
RedBlackTree.prototype.insert = function (value) {
    let newNode = this._createNode(value);
    let parentNode = this._findParentNode(newNode.value);
    this._insertNode(newNode, parentNode);
    this._fixInsert(newNode);
}

/**
 * Creates a new node with the given value and default properties.
 * @param {*} value - The value to store in the node.
 * @returns {Node} The newly created node.
 */
RedBlackTree.prototype._createNode = function (value) {
    let newNode = new Node(value);
    newNode.value = value;
    newNode.left = this.blackNullNode;
    newNode.right = this.blackNullNode;
    newNode.color = 'RED';
    return newNode;
}

/**
 * Finds the parent node for insertion of the new node with the given value.
 * @param {*} value - The value of the new node.
 * @returns {Node} The parent node for insertion.
 */
RedBlackTree.prototype._findParentNode = function (value) {
    let parentNode = null;
    let currentNode = this.root;

    // Traverse the tree until reaching a null leaf node
    while (currentNode !== this.blackNullNode) {
        parentNode = currentNode;
        if (value < currentNode.value) {
            currentNode = currentNode.left;
        } else {
            currentNode = currentNode.right;
        }
    }
    return parentNode;
}

/**
 * Inserts the new node into the Red-Black Tree with the given parent node.
 * @param {Node} newNode - The new node to insert.
 * @param {Node} parentNode - The parent node for insertion.
 */
RedBlackTree.prototype._insertNode = function (newNode, parentNode) {
    newNode.parent = parentNode;
    if (parentNode === null) {
        this.root = newNode;
    } else if (newNode.value < parentNode.value) {
        parentNode.left = newNode;
    } else {
        parentNode.right = newNode;
    }
    if (newNode.parent === null) {
        newNode.color = 'BLACK';
        return;
    }
    if (newNode.parent.parent === null) return;
}

/**
 * Fixes any violations of the Red-Black Tree properties after inserting a new node.
 * @param {Node} newNode - The newly inserted node to fix violations for.
 */
RedBlackTree.prototype._fixInsert = function (newNode) {
    while (this._isRed(newNode.parent)) {
        if (newNode.parent === newNode.parent.parent.right) {
            newNode = this._handleRightParent(newNode);
        } else {
            newNode = this._handleLeftParent(newNode);
        }
        if (newNode === this.root) break;
    }
    this.root.color = 'BLACK';
}

/**
 * Handles the case where the parent of the new node is a right child.
 * @param {Node} newNode - The newly inserted node to fix violations for.
 * @returns {Node} The node to continue fixing violations from.
 */
RedBlackTree.prototype._handleRightParent = function (newNode) {
    let uncle = newNode.parent.parent.left;
    if (this._isRed(uncle)) {
        uncle.color = 'BLACK';
        newNode.parent.color = 'BLACK';
        newNode.parent.parent.color = 'RED';
        newNode = newNode.parent.parent;
    } else {
        if (newNode === newNode.parent.left) {
            newNode = newNode.parent;
            this._rightRotate(newNode);
        }
        newNode.parent.color = 'BLACK';
        newNode.parent.parent.color = 'RED';
        this._leftRotate(newNode.parent.parent);
    }
    return newNode;
}

/**
 * Handles the case where the parent of the new node is a left child.
 * @param {Node} newNode - The newly inserted node to fix violations for.
 * @returns {Node} The node to continue fixing violations from.
 */
RedBlackTree.prototype._handleLeftParent = function (newNode) {
    let uncle = newNode.parent.parent.right;
    if (this._isRed(uncle)) {
        uncle.color = 'BLACK';
        newNode.parent.color = 'BLACK';
        newNode.parent.parent.color = 'RED';
        newNode = newNode.parent.parent;
    } else {
        if (newNode === newNode.parent.right) {
            newNode = newNode.parent;
            this._leftRotate(newNode);
        }
        newNode.parent.color = 'BLACK';
        newNode.parent.parent.color = 'RED';
        this._rightRotate(newNode.parent.parent);
    }
    return newNode;
}

/**
 * Checks if the given node is RED.
 * @param {Node} node - The node to check.
 * @returns {boolean} True if the node is RED, otherwise false.
 */
RedBlackTree.prototype._isRed = function (node) {
    return node !== null && node.color === 'RED';
}