const { checkPositiveIntegers } = require('./utility');

module.exports = multiply;

function multiply(num1, num2) {
    checkPositiveIntegers(num1, num2);

    if (num1 == '0' || num2 == '0') { return '0'; }

    let res = '0';
    let curSum = '';
    let tens = 0;
    let ones = 0;
    let curProduct = 0;
    let isCarry = false;
    let rankCounter = 0;

    for (let i = num2.length - 1; i >= 0; i--) {
        for (let j = num1.length - 1; j >= 0; j--) {
            // Calculating the current product of digits, considering the carry
            curProduct = parseInt(num1[j]) * parseInt(num2[i]) + (isCarry ? tens : 0);
            isCarry = curProduct > 9;

            tens = isCarry ? parseInt(curProduct.toString()[0]) : 0; // Tens if there is a carry, otherwise 0
            ones = isCarry ? curProduct.toString()[1] : curProduct.toString();// Ones if there is a carry, otherwise current product

            // If this is last digit, add to sum the entire product, otherwise, only ones
            curSum = (j == 0) ? curProduct + curSum : ones + curSum;
        }

        curSum = addZerosToEnd(curSum, rankCounter); // Add zeros to end of sum depending on rank

        res = res.plus(curSum);
        rankCounter++;
        curSum = '';
        isCarry = false;
    }

    return String(res);
}

function addZerosToEnd(str, count) {
    for (let i = 0; i < count; i++) {
        str += "0";
    }
    return str;
}