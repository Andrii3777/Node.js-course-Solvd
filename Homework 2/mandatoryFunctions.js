module.exports = {
    addValues,
    stringifyValue,
    invertBoolean,
    convertToNumber,
    coerceToType
}

function addValues (a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    } else if (typeof a === 'bigint' && typeof b === 'bigint') {
        return a + b;
    } else {
        throw new Error('Addition for the given values is not possible!');
    }
}

function stringifyValue (value) {
    if (typeof value === 'object') {
        return JSON.stringify(value);
    } else {
        return String(value);
    }
}

function invertBoolean (bool) {
    if (typeof bool === 'boolean') {
        return !bool;
    } else {
        throw new Error('Argument is not a boolean!');
    }
}

function convertToNumber (value) {
    if (typeof value === 'string') {
        const parsedValue = parseFloat(value);
        if (!isNaN(parsedValue)) {
            return parsedValue;
        } else {
            throw new Error('Conversion string to number failed!');
        }
    } else if (typeof value === 'boolean') {
        return Number(value);
    } else if (typeof value === 'number' || typeof value === 'bigint') {
        return value;
    } else {
        throw new Error('Conversion to the given type is not possible!');
    }
}

function coerceToType (value, type) {
    switch (type) {
        case 'string':
            return this.stringifyValue(value);
        case 'number':
            return this.convertToNumber(value);
        case 'bigint':
            return BigInt(this.convertToNumber(value));
        case 'boolean':
            return Boolean(value);
        default:
            throw new Error('Coercion to given type is not possible!');
    }
}