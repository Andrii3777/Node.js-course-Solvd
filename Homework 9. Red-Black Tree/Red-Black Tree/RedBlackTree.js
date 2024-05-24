// Node class representing a single node in the Red-Black Tree
class Node {
    constructor(value, color = 'RED', left = null, right = null, parent = null) {
        this.value = value;
        this.color = color;
        this.left = left;
        this.right = right;
        this.parent = parent;
    }
}

// RedBlackTree class implementing a Red-Black Tree
class RedBlackTree {
    constructor() {
        this.blackNullNode = new Node(null, 'BLACK');
        this.root = this.blackNullNode;
    }

    /**
     * Left rotates the subtree rooted at the given node.
     * @param {Node} node - The root of the subtree to rotate.
     */
    _leftRotate(node) {
        let rightChild = node.right;
        node.right = rightChild.left;
        if (rightChild.left !== this.blackNullNode) {
            rightChild.left.parent = node;
        }
        rightChild.parent = node.parent;
        if (node.parent === null) {
            this.root = rightChild;
        } else if (node === node.parent.left) {
            node.parent.left = rightChild;
        } else {
            node.parent.right = rightChild;
        }
        rightChild.left = node;
        node.parent = rightChild;
    }

    /**
     * Right rotates the subtree rooted at the given node.
     * @param {Node} node - The root of the subtree to rotate.
     */
    _rightRotate(node) {
        let leftChild = node.left;
        node.left = leftChild.right;
        if (leftChild.right !== this.blackNullNode) {
            leftChild.right.parent = node;
        }
        leftChild.parent = node.parent;
        if (node.parent === null) {
            this.root = leftChild;
        } else if (node === node.parent.right) {
            node.parent.right = leftChild;
        } else {
            node.parent.left = leftChild;
        }

        leftChild.right = node;
        node.parent = leftChild;
    }

    /**
     * Prints the Red-Black Tree in a structured format.
     */
    print() {
        const printNode = (node, prefix, isLeft) => {
            if (node !== this.blackNullNode) {
                const nodeColor = node.color === 'RED' ? '\x1b[31m' : '';
                const resetColor = '\x1b[0m';
                console.log(prefix + (isLeft ? "├── " : "└── ") + nodeColor + node.value + resetColor);
                printNode(node.left, prefix + (isLeft ? "│   " : "    "), true);
                printNode(node.right, prefix + (isLeft ? "│   " : "    "), false);
            }
        };

        if (this.root !== this.blackNullNode) {
            printNode(this.root, "", true);
        } else {
            console.log("Red-Black Tree is empty.");
        }
    }
}

module.exports = { RedBlackTree, Node };