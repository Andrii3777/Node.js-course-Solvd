const { customFilterUnique } = require('./tasks/task1');
const { chunkArray } = require('./tasks/task2');
const { customShuffle } = require('./tasks/task3');
const { getArrayIntersection, getArrayUnion, getArrayUnion2 } = require('./tasks/task4');
const {
    measureArrayPerformance,
    customMap,
    customFilter,
    customReduce
} = require('./tasks/task5');

// Task 1
console.log("Task 1: ");
const task1Arr = [
    { age: 22, name: 'Tom' },
    { age: 23, name: 'Jane' },
    { age: 22, name: 'John' },
    { age: 24, name: 'Alice' },
    { age: 25, name: 'John' }
];
const uniqueArr1 = customFilterUnique(task1Arr, a => a.name);
const uniqueArr2 = customFilterUnique(task1Arr, a => a.age);
console.log(uniqueArr1);
console.log(uniqueArr2);

// Task 2
console.log("\nTask 2: ");
const task2Arr = [1, 2, 3, 4, 5, 6];
console.log(chunkArray(task2Arr, 1));
console.log(chunkArray(task2Arr, 2));
console.log(chunkArray(task2Arr, 3));

// Task 3
console.log("\nTask 3: ");
console.log(customShuffle(['a', 'b', 'c', 'd']));
console.log(customShuffle([11, 12, 13, 14, 15]));

// Task 4
console.log("\nTask 4: ");
const task4Arr1 = [1, 2, 3, 4];
const task4Arr2 = [3, 4, 5, 6];
console.log(getArrayIntersection(task4Arr1, task4Arr2));
console.log(getArrayUnion(task4Arr1, task4Arr2));
console.log(getArrayUnion2(task4Arr1, task4Arr2));

// Task 5
console.log("\nTask 5: ");
Array.prototype.customMap = customMap;
Array.prototype.customFilter = customFilter;
Array.prototype.customReduce = customReduce;

const task5Arr = [];
for (let i = 0; i < 100000; i++) {
    task5Arr[i] = i;
}

/* console.log(arr.map(a => a * 2));
console.log(arr.customMap(a => a * 2)); */
const builtInDoubled = measureArrayPerformance(arr => arr.map(a => a * 2), task5Arr);
const customDoubled = measureArrayPerformance(arr => arr.customMap(a => a * 2), task5Arr);
console.log("Built-in map time(ms):", builtInDoubled);
console.log("Custom map time(ms):", customDoubled);
console.log("Difference(ms):", customDoubled - builtInDoubled);

/* console.log(arr.filter(a => a % 2 === 0));
console.log(arr.customFilter(a => a % 2 === 0)); */
const builtInEvens = measureArrayPerformance(arr => arr.filter(a => a % 2 === 0), task5Arr);
const customEvens = measureArrayPerformance(arr => arr.customFilter(a => a % 2 === 0), task5Arr);
console.log("\nBuilt-in filter time(ms):", builtInEvens);
console.log("Custom filter time(ms):", customEvens);
console.log("Difference(ms):", customEvens - builtInEvens);

/* console.log(arr.reduce((acc, num) => acc + num, 0));
console.log(arr.customReduce((acc, num) => acc + num, 0)); */
const builtInSum = measureArrayPerformance(arr => arr.reduce((acc, num) => acc + num, 0), task5Arr);
const customSum = measureArrayPerformance(arr => arr.customReduce((acc, num) => acc + num, 0), task5Arr);
console.log("\nBuilt-in reduce time(ms):", builtInSum);
console.log("Custom reduce time(ms):", customSum);
console.log("Difference(ms):", customSum - builtInSum);