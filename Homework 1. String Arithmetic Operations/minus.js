const {
    removeLeadingZeros,
    addStartZeros,
    checkPositiveIntegers,
    compareStrAsNum
} = require('./utility');

module.exports = minus;

function minus(num1, num2) {
    checkPositiveIntegers(num1, num2);

    if (compareStrAsNum(num1, num2) !== 1) {
        throw new Error("The first number must be greater than the second number!");
    }

    let res = '';
    let curSubstraction = 0; // Subtraction result for each digit
    let isBorrow = false; // Flag for borrowing
    let maxNumLength = (num1.length > num2.length) ? num1.length : num2.length;

    // Add leading zeros to make both numbers have the same length
    [num1, num2] = addStartZeros(num1, num2);

    for (let i = maxNumLength - 1; i >= 0; i--) {
        // Summing digits and "borrow" if necessary
        curSubstraction = parseInt(num1[i]) - parseInt(num2[i]) - (isBorrow ? 1 : 0);

        isBorrow = curSubstraction < 0;

        if (isBorrow) { curSubstraction = 10 + curSubstraction; }

        res = curSubstraction + res;
    }

    return removeLeadingZeros(res);
}