# <div align="center">CustomHashTable</div>

## Overview
`CustomHashTable` is implementation of a hash table. It uses an array of linked lists to handle collisions and supports standard hash table operations like insert, get, delete, and resize. This implementation is designed to dynamically resize itself based on the load factor to maintain efficient operations.

## Features
- **Dynamic Resizing**: Automatically resizes the hash table when the load factor exceeds a specified threshold.
- **Collision Handling**: Uses separate chaining with linked lists to handle collisions.
- **Flexible Capacity**: Allows setting an initial capacity and dynamically adjusts as needed.
- **Key-Value Operations**: Supports insertion, retrieval, and deletion of key-value pairs.
- **Max Collision Detection**: Provides a method to find the maximum number of collisions in any bucket.

## Methods
#### Constructor
```javascript
const hashTable = new CustomHashTable(100);  // Initializes with a capacity of 100
```
- **initialCapacity**: The initial capacity of the hash table (default is 100).

#### `hash(key)` Generates a hash value for a given key.
- **key**: The key to hash.
- **returns**: The hash value (number).

#### `resize()` Resizes the hash table when the load factor is exceeded.

#### `insert(key, value)` Inserts a key-value pair into the hash table.
- **key:** The key to insert.
- **value:** The value to insert.
```javascript
hashTable.insert('key1', 'value1');
```

#### `get(key)` Retrieves a value by key from the hash table.
- **key:** The key to retrieve.
- **returns:** The value associated with the key, or undefined if the key is not found.
```javascript
constructor(initialCapacity = 100)const value = hashTable.get('key1');
console.log(value);  // Outputs: value1
```

#### `delete(key)` Deletes a key-value pair from the hash table.
- **key:** The key to delete.
- **returns:** The deleted value, or undefined if the key is not found.
```javascript
const deletedValue = hashTable.delete('key1');
console.log(deletedValue);  // Outputs: value1
```

#### `print()` Prints all key-value pairs in the hash table.
```javascript
hashTable.print();
```

#### `maxCollisions()` Finds the maximum number of collisions in the hash table.
- **returns:** The maximum number of collisions.
```javascript
const maxCollisions = hashTable.maxCollisions();
console.log(maxCollisions);
```

## Example

```javascript
const { CustomHashTable } = require('./customHashTable');

const hashTable = new CustomHashTable(50);

hashTable.insert('name', 'Alice');
hashTable.insert('age', 30);
hashTable.insert('city', 'Wonderland');

console.log(hashTable.get('name'));  // Outputs: Alice
console.log(hashTable.get('age'));   // Outputs: 30

hashTable.delete('city');
console.log(hashTable.get('city'));  // Outputs: undefined

hashTable.print();
// Outputs:
// Key: name, Value: Alice
// Key: age, Value: 30

console.log(hashTable.maxCollisions());
```