const { calculateDiscountedPrice, calculateTotalPrice } = require('./task1');
const { getFullName, filterUniqueWords, getAverageGrade } = require('./task2');
const { createCounter, repeatFunction } = require('./task3');
const { calculateFactorial, power, powerTCO } = require('./task4');
const { lazyMap, fibonacciGenerator } = require('./task5');

// task 1
console.log("\ncalculateDiscountedPrice: ");
let actualArr = calculateDiscountedPrice([40, 30], [15, 10]);
let expectedArr = [34, 27];
console.log(JSON.stringify(actualArr) === JSON.stringify(expectedArr));

console.log("\ncalculateTotalPrice: ");
console.log(calculateTotalPrice([40, 30, 30]) === 100);

// task 2
console.log("\ngetFullName: ");
console.log(getFullName({ firstName: "aNdrIi", lastName: "bibik" }) === "Andrii Bibik");

console.log("\nfilterUniqueWords: ");
actualArr = filterUniqueWords("This isn't a string with unique words. Some words, ex-boyfriend");
expectedArr = [
    'a',
    'ex-boyfriend',
    "isn't",
    'Some',
    'string',
    'This',
    'unique',
    'with',
    'words'
];
console.log(JSON.stringify(actualArr) === JSON.stringify(expectedArr));

console.log("\ngetAverageGrade: ");
const students = [
    { name: 'Alice', grades: [80, 90, 95] },
    { name: 'Bob', grades: [70, 85, 75] },
    { name: 'Charlie', grades: [90, 95, 100] }
];
console.log(getAverageGrade(students).toFixed(3) + "" === "86.667");

// task 3
console.log("\ncreateCounter: ");
const counter1 = createCounter();
console.log(counter1() === 1);
console.log(counter1() === 2);

const counter2 = createCounter();
console.log(counter2() === 1);
console.log(counter2() === 2);

console.log("\nrepeatFunction: ");
const repeatMultiply = repeatFunction(a => console.log(a), 2);
repeatMultiply("doSmth()");

// task 4
console.log("\ncalculateFactorial: ");
console.log(calculateFactorial(4) === 24);

console.log("\npower: ");
console.log(power(2, 4) === 16);

console.log("\npowerTCO: ");
console.log(powerTCO(2, 4) === 16);

// task 5
console.log("\nlazyMap: ");
const lazyMapGen = lazyMap([1, 2, 3, 4, 5], x => x * 2);
console.log(lazyMapGen.next() === 2);
console.log(lazyMapGen.next() === 4);
console.log(lazyMapGen.next() === 6);

console.log("\nfibonacciGenerator: ");
const fibonacciGen = fibonacciGenerator();
console.log(fibonacciGen.next() === 1);
console.log(fibonacciGen.next() === 2);
console.log(fibonacciGen.next() === 3);
console.log(fibonacciGen.next() === 5);