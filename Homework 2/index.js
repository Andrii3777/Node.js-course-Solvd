const DataTransformation = require('./DataTransformation');

console.log("1. ", DataTransformation.addValues(2, 3) === 5);
console.log("2. ", DataTransformation.addValues("a", 'b') === 'ab');

console.log("3. ", DataTransformation.stringifyValue({ key: 'value' }) === '{"key":"value"}');
console.log("4. ", DataTransformation.stringifyValue(12) === '12');

console.log("5. ", DataTransformation.invertBoolean(true) === false);
console.log("6. ", DataTransformation.invertBoolean(false) === true);

console.log("7. ", DataTransformation.convertToNumber('12.2') === 12.2);
console.log("8. ", DataTransformation.convertToNumber('123') === 123);

console.log("9. ", DataTransformation.coerceToType('15', 'number') === 15);
console.log("10. ", DataTransformation.coerceToType(15, 'string') === '15');

// Optional functions
console.log("11. ", DataTransformation.addAllNumbersInArray([1, [2, "12", [4, "5"]]]) === 24);
console.log("12. ", DataTransformation.addAllNumbersInArray(['ewr', [2], 34]) === 36);

console.log("13. ", DataTransformation.unicodeArrayToString([72, 101, 108, 108, 111]) === "Hello");
console.log("14. ", DataTransformation.unicodeArrayToString([119, 111, 114, 108, 100]) === "world");

let actualArr = DataTransformation.stringToASCIIArray('Hello');
let expectedArr = [72, 101, 108, 108, 111];

console.log("15. ", JSON.stringify(actualArr) === JSON.stringify(expectedArr));

actualArr = DataTransformation.replaceElementsWithTypes([1, [2, "12"], [], true, 123n]);
expectedArr = ["number","object","object","boolean","bigint"];
console.log("16. ", JSON.stringify(actualArr) === JSON.stringify(expectedArr));

actualArr = DataTransformation.removeFalsyExpressions(['', 'a', null, 1, undefined, NaN, [], {}]);
expectedArr = ['a', 1, [], {}];
console.log("17. ", JSON.stringify(actualArr) === JSON.stringify(expectedArr));