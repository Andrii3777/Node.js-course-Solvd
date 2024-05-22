# <div align="center">Data Structures</div>

## Stack Implementation

This implementation provides a Stack data structure with basic operations such as push, pop, peek, and checking if the stack is empty. Additionally, it includes a specialized `MinMaxStack` class that efficiently retrieves the minimum and maximum values in the stack.

### Stack Class
Represents a Last In First Out (LIFO) stack.

#### Constructor
Creates a new Stack instance.

#### Methods

##### `push(value)`
Pushes a value onto the stack.
- **Parameters**: `value` - The value to push onto the stack.

##### `pop()`
Pops a value from the stack.
- **Returns**: `*` - The value popped from the stack.
- **Throws**: `Error` if the stack is empty.

##### `peek()`
Peeks at the top value of the stack without removing it.
- **Returns**: `*` - The top value of the stack.
- **Throws**: `Error` if the stack is empty.

##### `length`
Gets the length of the stack.
- **Type**: `number`

##### `isEmpty()`
Checks if the stack is empty.
- **Returns**: `boolean` - True if the stack is empty, false otherwise.

### MinMaxStack Class
Extends the functionality of the Stack class to efficiently retrieve the minimum and maximum values in the stack.

#### Constructor
Creates a new MinMaxStack instance.

#### Methods

##### `getMin()`
Gets the minimum value in the stack.
- **Returns**: `*` - The minimum value in the stack.
- **Throws**: `Error` if the stack is empty.

##### `getMax()`
Gets the maximum value in the stack.
- **Returns**: `*` - The maximum value in the stack.
- **Throws**: `Error` if the stack is empty.

#### Properties

##### `length`
Gets the length of the stack.
- **Type**: `number`

## Queue Implementation

This implementation provides a Queue data structure with basic operations such as enqueue, dequeue, peek, and checking if the queue is empty.

### Queue Class
Represents a Queue data structure with methods for manipulation.

#### Constructor
Creates a new Queue instance.

#### Methods

##### `enqueue(value)`
Adds a value to the end of the queue.
- **Parameters**: `value` - The value to enqueue.

##### `dequeue()`
Removes and returns the value at the front of the queue.
- **Returns**: `*` - The value dequeued from the front of the queue.
- **Throws**: `Error` if the queue is empty.

##### `peek()`
Returns the value at the front of the queue without removing it.
- **Returns**: `*` - The value at the front of the queue.
- **Throws**: `Error` if the queue is empty.

##### `isEmpty()`
Checks if the queue is empty.
- **Returns**: `boolean` - True if the queue is empty, false otherwise.

#### Properties

##### `size`
Gets the number of elements in the queue.
- **Type**: `number`


## BinaryTree Implementation

### Node Class
Represents a node in the binary tree.

#### Properties
- `value`: The value stored in the node.
- `left`: A reference to the left child node.
- `right`: A reference to the right child node.

### BinaryTree Class
Represents the binary tree structure with methods for manipulation and traversal.

#### Methods

##### `isEmpty()`
Checks if the binary tree is empty.
- **Returns**: `boolean` - True if the tree is empty, false otherwise.

##### `insert(value, parentNode = null, isLeft = true)`
Inserts a new value into the binary tree.
- **Parameters**:
  - `value`: The value to insert.
  - `parentNode` (optional): The parent node to attach the new node to.
  - `isLeft` (optional): Whether to attach the new node as a left child. Default is true.
- **Throws**: `Error` if parent node is not specified for non-root nodes.

##### `search(value)`
Searches for a node with the specified value in the binary tree.
- **Parameters**: `value`: The value to search for.
- **Returns**: `Node|null` - The node with the specified value, or null if not found.
- **Throws**: `Error` if the tree is empty.

##### `traverseInorder(node = this.root)`
Traverses the binary tree in in-order sequence and logs the values.
- **Parameters**: `node` (optional): The starting node for traversal. Default is the root.

##### `traversePreorder(node = this.root)`
Traverses the binary tree in pre-order sequence and logs the values.
- **Parameters**: `node` (optional): The starting node for traversal. Default is the root.

##### `traversePostorder(node = this.root)`
Traverses the binary tree in post-order sequence and logs the values.
- **Parameters**: `node` (optional): The starting node for traversal. Default is the root.

##### `isBinarySearchTree()`
Checks if the binary tree is a valid binary search tree (BST).
- **Returns**: `boolean` - True if the tree is a valid BST, false otherwise.

##### `printTree()`
Prints the binary tree structure to the console.
- **Throws**: `Error` if the tree is empty.

#### Time Complexity

- **Insertion**: O(1) for root insertion, O(1) for inserting as a child node when parent is known.
- **Search**: O(n) in the worst case.
- **Traversal**: O(n) for in-order, pre-order, and post-order traversals.
- **Validation (isBinarySearchTree)**: O(n).

### Graph Class
This implementation provides a simple Graph with basic operations such as adding vertices and edges, performing searches (DFS and BFS), and finding the shortest path using BFS and Dijkstra's algorithm.

#### Methods

##### `addVertex(vertex)`
Adds a new vertex to the graph.
- **Parameters**: `vertex` - The vertex to add.

##### `addEdge(fromVertex, toVertex)`
Adds an undirected edge between two vertices in the graph.
- **Parameters**:
  - `fromVertex`: The starting vertex of the edge.
  - `toVertex`: The ending vertex of the edge.
- **Throws**: `Error` if either vertex does not exist.

##### `DFS(startVertex)`
Performs a depth-first search (DFS) starting from a specified vertex.
- **Parameters**: `startVertex` - The starting vertex for the DFS.
- **Returns**: `Array` - An array of vertices visited during the DFS.
- **Throws**: `Error` if the starting vertex does not exist.

##### `BFS(startVertex)`
Performs a breadth-first search (BFS) starting from a specified vertex.
- **Parameters**: `startVertex` - The starting vertex for the BFS.
- **Returns**: `Array` - An array of vertices visited during the BFS.
- **Throws**: `Error` if the starting vertex does not exist.

##### `shortestPathBFS(startVertex, endVertex)`
Finds the shortest path between two vertices using BFS.
- **Parameters**:
  - `startVertex`: The starting vertex.
  - `endVertex`: The ending vertex.
- **Returns**: `Array|null` - The shortest path as an array of vertices, or null if no path exists.
- **Throws**: `Error` if either vertex does not exist.

##### `shortestPathDijkstra(startVertex, endVertex)`
Finds the shortest path between two vertices using Dijkstra's algorithm.
- **Parameters**:
  - `startVertex`: The starting vertex.
  - `endVertex`: The ending vertex.
- **Returns**: `Array|null` - The shortest path as an array of vertices, or null if no path exists.
- **Throws**: `Error` if either vertex does not exist.

##### `printGraph()`
Prints the graph structure to the console.

#### Time Complexity

- **Adding a Vertex**: O(1)
- **Adding an Edge**: O(1)
- **DFS and BFS**: O(V + E), where V is the number of vertices and E is the number of edges.
- **Shortest Path (BFS)**: O(V + E)
- **Shortest Path (Dijkstra)**: O(V^2) for unweighted graphs using a queue.

## Graph Implementation

This implementation provides a simple Graph with basic operations such as adding vertices and edges, performing searches (DFS and BFS), and finding the shortest path using BFS and Dijkstra's algorithm.

### Graph Class
Represents the graph structure with methods for manipulation and traversal.

#### Methods

##### `addVertex(vertex)`
Adds a new vertex to the graph.
- **Parameters**: `vertex` - The vertex to add.

##### `addEdge(fromVertex, toVertex)`
Adds an undirected edge between two vertices in the graph.
- **Parameters**:
  - `fromVertex`: The starting vertex of the edge.
  - `toVertex`: The ending vertex of the edge.
- **Throws**: `Error` if either vertex does not exist.

##### `DFS(startVertex)`
Performs a depth-first search (DFS) starting from a specified vertex.
- **Parameters**: `startVertex` - The starting vertex for the DFS.
- **Returns**: `Array` - An array of vertices visited during the DFS.
- **Throws**: `Error` if the starting vertex does not exist.

##### `BFS(startVertex)`
Performs a breadth-first search (BFS) starting from a specified vertex.
- **Parameters**: `startVertex` - The starting vertex for the BFS.
- **Returns**: `Array` - An array of vertices visited during the BFS.
- **Throws**: `Error` if the starting vertex does not exist.

##### `shortestPathBFS(startVertex, endVertex)`
Finds the shortest path between two vertices using BFS.
- **Parameters**:
  - `startVertex`: The starting vertex.
  - `endVertex`: The ending vertex.
- **Returns**: `Array|null` - The shortest path as an array of vertices, or null if no path exists.
- **Throws**: `Error` if either vertex does not exist.

##### `shortestPathDijkstra(startVertex, endVertex)`
Finds the shortest path between two vertices using Dijkstra's algorithm.
- **Parameters**:
  - `startVertex`: The starting vertex.
  - `endVertex`: The ending vertex.
- **Returns**: `Array|null` - The shortest path as an array of vertices, or null if no path exists.
- **Throws**: `Error` if either vertex does not exist.

##### `printGraph()`
Prints the graph structure to the console.

#### Time Complexity

- **Adding a Vertex**: O(1)
- **Adding an Edge**: O(1)
- **DFS and BFS**: O(V + E), where V is the number of vertices and E is the number of edges.
- **Shortest Path (BFS)**: O(V + E)
- **Shortest Path (Dijkstra)**: O(V^2) for unweighted graphs using a queue.


## Linked List Implementation

This implementation provides a simple Linked List with basic operations such as insertion, deletion, searching, and cycle detection.

### Node Class
Represents a node in the linked list.

#### Constructor
Constructs a new Node instance.
- **Parameters**:
  - `value`: The value of the node.
  - `next` (optional): The next node in the linked list.

### LinkedList Class
Represents the linked list structure with methods for manipulation and traversal.

#### Properties
- `length`: The number of nodes in the linked list.
- `head`: The first node of the linked list.
- `tail`: The last node of the linked list.

#### Methods

##### `insertToTail(value)`
Inserts a new value at the tail of the linked list.
- **Parameters**: `value` - The value to insert.

##### `insertToHead(value)`
Inserts a new value at the head of the linked list.
- **Parameters**: `value` - The value to insert.

##### `insertByIndex(index, value)`
Inserts a new value at the specified index in the linked list.
- **Parameters**:
  - `index`: The index to insert the value at.
  - `value`: The value to insert.
- **Throws**: `Error` if the index is out of bounds.

##### `deleteHead()`
Deletes the head node of the linked list.
- **Returns**: `Node` - The deleted head node.
- **Throws**: `Error` if the linked list is empty.

##### `deleteTail()`
Deletes the tail node of the linked list.
- **Returns**: `Node` - The deleted tail node.
- **Throws**: `Error` if the linked list is empty.

##### `deleteFromIndex(index)`
Deletes the node at the specified index in the linked list.
- **Parameters**: `index` - The index of the node to delete.
- **Returns**: `Node` - The deleted node.
- **Throws**: `Error` if the linked list is empty or the index is out of bounds.

##### `find(value)`
Finds the first node with the specified value in the linked list.
- **Parameters**: `value` - The value to search for.
- **Returns**: `Node|null` - The first node with the specified value, or null if not found.
- **Throws**: `Error` if the linked list is empty.

##### `getByIndex(index)`
Gets the node at the specified index in the linked list.
- **Parameters**: `index` - The index of the node to get.
- **Returns**: `Node` - The node at the specified index.
- **Throws**: `Error` if the linked list is empty or the index is out of bounds.

##### `hasCycle()`
Checks if the linked list contains a cycle.
- **Returns**: `Node|null` - The node where the cycle begins, or null if there is no cycle.
- **Throws**: `Error` if the linked list is empty.

##### `print()`
Prints the linked list to the console.
- **Throws**: `Error` if the linked list is empty.
