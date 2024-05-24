const { RedBlackTree } = require('./Red-Black Tree/RedBlackTree');
require('./Red-Black Tree/insertion');
require('./Red-Black Tree/deletion');
require('./Red-Black Tree/searching');

const tree = new RedBlackTree();

tree.insert(8);
tree.insert(11);
tree.insert(12);
tree.insert(13);
tree.insert(14);
tree.insert(15);
tree.insert(9);
tree.insert(10);
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);
tree.insert(7);

console.log('Print Red-Black Tree:');
tree.print();

console.log('\nDelete node 4:');
tree.delete(4);
console.log('\nDelete node 1:');
tree.delete(1);
console.log('\nDelete node 16:');
tree.delete(16);

console.log('\nPrint Red-Black Tree:');
tree.print();

console.log('\nSearch node 16:', tree.search(16));
console.log('\nSearch node 15:', tree.search(15));

console.log('\nPrint Red-Black Tree:');
tree.print();