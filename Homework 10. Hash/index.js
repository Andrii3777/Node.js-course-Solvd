const { data } = require('./Hash Table/data');
const { CustomHashTable } = require('./Hash Table/hashTable');

const hashTable = new CustomHashTable(50);

console.log('\nCapacity', hashTable.capacity);
console.log('Current Length', hashTable.curLength);
console.log('\n');

for (let i = 0; i < data.length / 2; i++) {
    hashTable.insert(data[i][0], data[i][1]);
}

hashTable.print();
console.log('\nCapacity', hashTable.capacity);
console.log('Current Length', hashTable.curLength);
console.log('Max collisions:', hashTable.maxCollisions());
console.log('\n');

for (let i = data.length / 2; i < data.length; i++) {
    hashTable.insert(data[i][0], data[i][1]);
}

hashTable.print();
console.log('\nCapacity', hashTable.capacity);
console.log('Current Length', hashTable.curLength);
console.log('Max collisions:', hashTable.maxCollisions());

console.log('\nget element with key "cityAlice":', hashTable.get('cityAlice'));
console.log('delete element with key "cityAlice":', hashTable.delete('cityAlice'));
console.log('get element with key "cityAlice":', hashTable.get('cityAlice'));

//console.log(hashTable.hashTable);