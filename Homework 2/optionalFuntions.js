module.exports = {
    addAllNumbersInArray,
    unicodeArrayToString,
    stringToASCIIArray,
    replaceElementsWithTypes,
    removeFalsyExpressions
}

function addAllNumbersInArray(arr) {
    checkIfNotArray(arr);

    let sum = 0;

    function addNumbersRecursive(array) {
        array.forEach(item => {
            if (Array.isArray(item)) {
                addNumbersRecursive(item);
            } else if (!isNaN(item)) {
                sum += parseFloat(item);
            }
        });
    }

    addNumbersRecursive(arr);

    return sum;
}

function unicodeArrayToString(unicodeArray) {
    checkIfNotArray(unicodeArray);

    return String.fromCharCode(...unicodeArray);
}

function stringToASCIIArray(str) {
    if (typeof str !== 'string') {
        throw new Error('Argument must be a string!');
    }

    const asciiArray = [];

    for (let i = 0; i < str.length; i++) {
        asciiArray.push(str.charCodeAt(i));
    }

    return asciiArray;
}

function replaceElementsWithTypes(arr) {
    checkIfNotArray(arr);

    return arr.map(item => typeof item);
}

function removeFalsyExpressions(arr) {
    checkIfNotArray(arr);

    return arr.filter(item => !!item);
}

function checkIfNotArray(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Argument must be an array!');
    }
}