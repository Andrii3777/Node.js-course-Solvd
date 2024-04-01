const {
    removeLeadingZeros,
    checkPositiveIntegers,
    compareStrAsNum
} = require('./utility');

module.exports = divide;

function divide(dividend, divider) {
    checkPositiveIntegers(dividend, divider);

    let res = '';
    let curQuotient = 0;
    let i = 0;
    let curDividend = dividend[i++];

    // Finding the smallest number that can be divided by divider
    while (i < dividend.length && compareStrAsNum(curDividend, divider) == -1) {
        curDividend = curDividend + dividend[i];
        i++;
    }

    // Divide this smallest number by divider and add next digits if exists
    while (i < dividend.length) {
        // if (curDividend >= divider)
        if (compareStrAsNum(curDividend, divider) != -1) {
            [curQuotient, curDividend] = divideStep(curDividend, divider);
        }

        curDividend = removeLeadingZeros(curDividend + dividend[i]);
        res += curQuotient;
        curQuotient = 0;
        i++;
    }

    // if (curDividend >= divider)
    if (compareStrAsNum(curDividend, divider) != -1) {
        [curQuotient, curDividend] = divideStep(curDividend, divider);
    }

    res += curQuotient;

    return res;
}

/**
 * Performs one step of division operation, calculating quotient and dividend.
 *
 * @param {*} dividend - the number to be divided.
 * @param {*} divider - the number by which to divide.
 * @returns {Array} An array containing the quotient and
 *                      dividend after one division step.
 */
function divideStep(dividend, divider) {
    let quotient = 0;

    do {
        // if (dividend == divider)
        if (compareStrAsNum(dividend, divider) == 0) {
            dividend = '0';
        } else {
            dividend = dividend.minus(divider);
        }

        quotient++;
        // Continue looping while dividend is not equal to '0'
        // and dividend is greater than or equal to divider
    } while (dividend != '0' && compareStrAsNum(dividend, divider) != -1);

    return [quotient, dividend];
}