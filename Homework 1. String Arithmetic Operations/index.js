const plus = require('./plus');
const minus = require('./minus');
const divide = require('./divide');
const multiply = require('./multiply');

String.prototype.plus = function (otherString) {
    return plus(this, otherString);
};
String.prototype.minus = function (otherString) {
    return minus(this, otherString);
};
String.prototype.divide = function (otherString) {
    return divide(this, otherString);
};
String.prototype.multiply = function (otherString) {
    return multiply(this, otherString);
};

// Test cases
console.log("PLUS:");
console.log("Test 1:", "123".plus("456") === "579");
console.log("Test 2:", "1000".plus("1") === "1001");
console.log("Test 3:", "999".plus("1") === "1000");
console.log("Test 4:", "0".plus("0") === "0");
console.log("Test 5:", "999999".plus("1") === "1000000");

console.log("\nMINUS:");
console.log("Test 1:", "1000".minus("999") === "1");
console.log("Test 2:", "12345".minus("5432") === "6913");
console.log("Test 3:", "1000".minus("1") === "999");
console.log("Test 4:", "10000".minus("9999") === "1");
console.log("Test 5:", "999".minus("998") === "1");

console.log("\nMULTIPLY:");
console.log("Test 1:", "123".multiply("456") === "56088");
console.log("Test 2:", "1000".multiply("2") === "2000");
console.log("Test 3:", "999".multiply("1") === "999");
console.log("Test 4:", "123456789".multiply("987654321") === "121932631112635269");
console.log("Test 5:", "12345".multiply("0") === "0");

console.log("\nDIVIDE:");
console.log("Test 1:", "123456".divide("123") === "1003");
console.log("Test 1:", "1420".divide("13") === "109");
console.log("Test 2:", "1000".divide("2") === "500");
console.log("Test 3:", "999".divide("1") === "999");
console.log("Test 4:", "100".divide("10") === "10");
console.log("Test 5:", "123456789".divide("123") === "1003713");
