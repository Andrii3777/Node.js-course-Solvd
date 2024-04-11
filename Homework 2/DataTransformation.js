const {
    addValues,
    stringifyValue,
    invertBoolean,
    convertToNumber,
    coerceToType
} = require('./mandatoryFunctions');

const {
    addAllNumbersInArray,
    unicodeArrayToString,
    stringToASCIIArray,
    replaceElementsWithTypes,
    removeFalsyExpressions
} = require('./optionalFuntions');

const DataTransformation = {
    addValues,
    stringifyValue,
    invertBoolean,
    convertToNumber,
    coerceToType,

    addAllNumbersInArray,
    unicodeArrayToString,
    stringToASCIIArray,
    replaceElementsWithTypes,
    removeFalsyExpressions
};

module.exports = DataTransformation;