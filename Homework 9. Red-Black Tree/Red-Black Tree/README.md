# <div align="center">Red-Black Tree Implementation</div>

This repository contains an implementation of a Red-Black Tree data structure in JavaScript. The Red-Black Tree is a self-balancing binary search tree that maintains balance through a set of rules and operations.

## Overview

The Red-Black Tree is a type of self-balancing binary search tree where each node contains an extra bit for representing the color of the node, either red or black. The tree must satisfy the following properties to maintain balance:

### Red-Black Tree Properties:

- Every node is either red or black.
- The root is always black.
- Red nodes cannot have red children (no two adjacent red nodes).
- Every path from a node to its descendant null nodes must have the same number of black nodes.

### Binary Search Tree Properties:

- The value of each node must be greater than or equal to the values of all nodes in its left subtree.
- The value of each node must be less than or equal to the values of all nodes in its right subtree.

## Node Class

Represents a single node in the Red-Black Tree.

### Constructor

- **Parameters:** value - The value stored in the node.
- **Properties:**
  - value: The value stored in the node.
  - color: The color of the node, either "RED" or "BLACK".
  - left: Reference to the left child node.
  - right: Reference to the right child node.
  - parent: Reference to the parent node.

## RedBlackTree Class

Implements the Red-Black Tree data structure.

### Constructor

Creates a new instance of the Red-Black Tree.

### Methods

- **`insert(value):`** Inserts a new node with the given value into the Red-Black Tree while maintaining the properties of the tree.
- **`delete(value):`** Deletes the node with the specified value from the Red-Black Tree while ensuring that the tree remains balanced and follows the Red-Black Tree properties.
- **`search(value):`** Searches for a node with the specified value in the Red-Black Tree and returns the node if found, otherwise returns null.
- **`print():`** Prints the Red-Black Tree in a structured format, displaying the nodes and their relationships within the tree.

### Internal Methods

- **`_leftRotate(node):`** Performs a left rotation on the subtree rooted at the given node.
- **`_rightRotate(node):`** Performs a right rotation on the subtree rooted at the given node.
- **`_fixInsert(newNode):`** Fixes any violations of the Red-Black Tree properties after inserting a new node.
- **`_fixDelete(node):`** Fixes any violations of the Red-Black Tree properties after deleting a node.

## Usage

To use the Red-Black Tree implementation, follow these steps:

1. Instantiate Red-Black Tree: Create a new instance of the RedBlackTree class.
2. Insert Nodes: Use the insert method to insert nodes into the tree.
3. Delete Nodes: Use the delete method to delete nodes from the tree.
4. Search Nodes: Use the search method to search for nodes in the tree.
5. Print Tree: Use the print method to print the tree in a structured format.

### Example:

```javascript
const { RedBlackTree } = require('./RedBlackTree');

// Create a new Red-Black Tree instance
const tree = new RedBlackTree();

// Insert nodes into the tree
tree.insert(10);
tree.insert(20);
tree.insert(5);

// Delete a node from the tree
tree.delete(20);

// Search for a node in the tree
const foundNode = tree.search(10);

// Print the tree
tree.print();
```