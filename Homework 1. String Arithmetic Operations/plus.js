const { addStartZeros, checkPositiveIntegers, } = require('./utility');

module.exports = plus;

function plus(num1, num2) {
    checkPositiveIntegers(num1, num2);

    let res = '';
    let sum = 0;
    let isCarry = false;
    let maxNumLength = (num1.length > num2.length) ? num1.length : num2.length;

    [num1, num2] = addStartZeros(num1, num2);

    for (let i = maxNumLength - 1; i >= 0; i--) {
        // Summing digits and "carry" if necessary
        sum = parseInt(num1[i]) + parseInt(num2[i]) + (isCarry ? 1 : 0);
        isCarry = sum >= 10;
        res = (sum % 10) + res;
    }

    // If there is a remaining carry, add it to the result
    if (isCarry) { res = '1' + res; }

    return res;
}