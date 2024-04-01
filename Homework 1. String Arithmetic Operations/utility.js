module.exports = {
    removeLeadingZeros,
    addStartZeros,
    checkPositiveIntegers,
    compareStrAsNum
}

function removeLeadingZeros(str) {
    return str.replace(/^0+/, '');
}

function checkPositiveIntegers(num1, num2) {
    if (!isPositiveInteger(num1) || !isPositiveInteger(num2)) {
        throw new Error("Both numbers must be positive integers!");
    }
}

function isPositiveInteger(number) {
    return /^\d+$/.test(number);
}

/**
 * Adds leading zeros to greater number until they have the same length.
 *
 * @param {*} num1 - the first number.
 * @param {*} num2 - the second number.
 * @returns {Array} An array containing num1 and num2
 * with leading zeros added, ensuring both have the same length.
 */
function addStartZeros(num1, num2) {
    while (num1.length < num2.length) {
        num1 = '0' + num1;
    }
    while (num2.length < num1.length) {
        num2 = '0' + num2;
    }

    return [num1, num2];
}

/**
 * Compares two strings as numbers.
 *
 * @param {*} str1 - the first string to compare.
 * @param {*} str2 - the second string to compare.
 * @returns {number} Returns:
 *                  1 if str1 is greater than str2,
 *                 -1 if str1 is less than str2,
 *                  0 if str1 is equal to str2.
 */
function compareStrAsNum(str1, str2) {
    // First compare string lengths
    if (str1.length > str2.length) {
        return 1;
    } else if (str1.length < str2.length) {
        return -1;
    }

    // If line lengths are the equal, compare their digits
    for (let i = 0; i < str1.length; i++) {
        const digit1 = parseInt(str1[i]);
        const digit2 = parseInt(str2[i]);

        if (digit1 > digit2) {
            return 1;
        } else if (digit1 < digit2) {
            return -1;
        }
    }

    // If all digits are the equal, the strings are equal
    return 0;
}