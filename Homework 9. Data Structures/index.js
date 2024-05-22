const { Stack, MinMaxStack } = require('./Data Structures/stack');
const { Queue } = require('./Data Structures/queue');
const { BinaryTree } = require('./Data Structures/binaryTree');
const { Graph } = require('./Data Structures/graph');
const { LinkedList } = require('./Data Structures/linkedList');

console.log('================STACK================');
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log('peek:', stack.peek()); // Expected output: 3
console.log('pop:', stack.pop()); // Expected output: 3
console.log('peek:', stack.peek()); // Expected output: 2

console.log('stack:', stack.stack);

const minMaxStack = new MinMaxStack();

minMaxStack.push(10);
minMaxStack.push(5);
minMaxStack.push(2);
minMaxStack.push(13);
minMaxStack.push(1);

console.log('\nminMaxStack:', minMaxStack.stack.stack);
console.log('min:', minMaxStack.getMin()); // Expected output: 1
console.log('max:', minMaxStack.getMax()); // Expected output: 13

console.log('\npop:', minMaxStack.pop()); // Expected output: 1
console.log('minMaxStack:', minMaxStack.stack.stack);
console.log('min:', minMaxStack.getMin()); // Expected output: 2
console.log('max:', minMaxStack.getMax()); // Expected output: 13

console.log('\npop:', minMaxStack.pop()); // Expected output: 13
console.log('minMaxStack:', minMaxStack.stack.stack);

console.log('min:', minMaxStack.getMin()); // Expected output: 2
console.log('max:', minMaxStack.getMax()); // Expected output: 10

console.log('\n================QUEUE================');
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log('queue', queue.queue);
console.log('peek', queue.peek()); // Expected output: 1
console.log('dequeue', queue.dequeue()); // Expected output: 1
console.log('peek', queue.peek()); // Expected output: 2
console.log('dequeue', queue.dequeue()); // Expected output: 2
console.log('size', queue.size); // Expected output: 1

console.log('isEmpty', queue.isEmpty()); // Expected output: false
console.log('dequeue',queue.dequeue());// Dequeue the last element from the queue
console.log('isEmpty', queue.isEmpty()); // Expected output: true

console.log('\n================BINARY TREE================');
const tree = new BinaryTree();

tree.insert(1);

const rootNode = tree.root;
tree.insert(2, rootNode);
tree.insert(3, rootNode, false);

const leftNode1 = rootNode.left;
const rightNode1 = rootNode.right;
tree.insert(4, leftNode1);
tree.insert(5, leftNode1, false);
tree.insert(6, rightNode1, false);

tree.printTree();
/* ├── 1
│   ├── 2
│   │   ├── 4
│   │   └── 5
│   └── 3
│       └── 6 */

//         OR

//         1
//        /  \
//      2     3
//     / \     \
//    4   5     6
console.log('\nIs Binary Search Tree:', tree.isBinarySearchTree());

console.log('\nsearch', tree.search(6)); // Node { value: 6, left: null, right: null }
console.log('search', tree.search(21)); // null

console.log('\nInorder traversal:');
tree.traverseInorder();

console.log('\nPreorder traversal:');
tree.traversePreorder();

console.log('\nPostorder traversal:');
tree.traversePostorder();

const bst = new BinaryTree();
bst.insert(25);
bst.insert(20, bst.root);
bst.insert(10, bst.root.left);
bst.insert(22, bst.root.left, false);
bst.insert(5, bst.root.left.left);
bst.insert(12, bst.root.left.left, false);
bst.insert(36, bst.root, false);
bst.insert(30, bst.root.right);
bst.insert(28, bst.root.right.left);
bst.insert(40, bst.root.right, false);
bst.insert(38, bst.root.right.right);
bst.insert(48, bst.root.right.right, false);
/* ├── 25
│   ├── 20
│   │   ├── 10
│   │   │   ├── 5
│   │   │   └── 12
│   │   └── 22
│   └── 36
│       ├── 30
│       │   ├── 28
│       └── 40
│           ├── 38
│           └── 18
*/
bst.printTree();
console.log('Is Binary Search Tree:', bst.isBinarySearchTree());

console.log('\n================GRAPH================');
const graph = new Graph();

graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.addVertex(7);
graph.addVertex(8);
graph.addVertex(9);
graph.addVertex(10);
graph.addVertex(11);
graph.addVertex(12);
graph.addVertex(13);
graph.addVertex(14);
graph.addVertex(15);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(0, 3);
graph.addEdge(1, 4);
graph.addEdge(1, 5);
graph.addEdge(2, 6);
graph.addEdge(2, 7);
graph.addEdge(3, 8);
graph.addEdge(3, 9);
graph.addEdge(4, 10);
graph.addEdge(5, 11);
graph.addEdge(6, 12);
graph.addEdge(7, 13);
graph.addEdge(8, 14);
graph.addEdge(9, 15);
graph.addEdge(10, 11);
graph.addEdge(11, 12);
graph.addEdge(12, 13);
graph.addEdge(13, 14);
graph.addEdge(14, 15);

/*
       0
     / | \
    1  2  3
   /\  /\  /\
  4 5 6 7  8 9
 /  | \ \  \  \
10-11-12-13-14-15
*/

console.log("Graph:");
graph.printGraph();

console.log("\nBFS starting from 0:", graph.BFS(0));
console.log("\nDFS starting from 0:", graph.DFS(0));

console.log("\nShortest path (BFS) from 0 to 15:", graph.shortestPathBFS(0, 15));
console.log("Shortest path (Dijkstra) from 0 to 15:", graph.shortestPathDijkstra(0, 15));

console.log("\nShortest path (BFS) from 4 to 13:", graph.shortestPathBFS(4, 13));
console.log("Shortest path (Dijkstra) from 4 to 13:", graph.shortestPathDijkstra(4, 13));

console.log("\nShortest path (BFS) from 7 to 9:", graph.shortestPathBFS(7, 9));
console.log("Shortest path (Dijkstra) from 7 to 9:", graph.shortestPathDijkstra(7, 9));

console.log("\nShortest path (BFS) from 0 to 5:", graph.shortestPathBFS(0, 5));
console.log("Shortest path (Dijkstra) from 0 to 5:", graph.shortestPathDijkstra(0, 5));

console.log('\n================LINKED LIST================');
const list = new LinkedList();

list.insertToTail(50);
list.insertToTail(60);
list.insertToHead(30);
list.insertToHead(20);
list.insertToHead(10);
list.insertByIndex(3, 40);
list.insertToTail(70);

console.log('Deleted Head:', list.deleteHead());
console.log('Deleted Tail:', list.deleteTail());
console.log('Deleted Element at Index 4:', list.deleteFromIndex(4));

console.log('\nFind Element with value 20:', list.find(20));
console.log('Get Element at Index 2:', list.getByIndex(2));

console.log('\nLinked List:');
list.print();

// Creating a cycle by pointing the tail to the node with value 30
list.tail.next = list.getByIndex(2);
console.log('\nHas Cycle:', list.hasCycle()); // Expected output: Has Cycle: true

list.tail.next = null;// Break the cycle

// Check if the linked list has a cycle after breaking it
console.log('Has Cycle:', list.hasCycle()); // Expected output: Has Cycle: false