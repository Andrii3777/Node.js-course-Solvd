// Task 4: Advanced Property Descriptors

function createImmutableObject(obj) {
    const newObj = {};

    function createObjectRecursive(obj, newObj) {
        for (let key in obj) {
            const value = obj[key];

            if (value !== null && typeof value === 'object') {
                const newValue = Array.isArray(value) ? [] : {};
                defineImmutableProperty(newObj, key, newValue);
                createObjectRecursive(value, newObj[key]);
            } else {
                defineImmutableProperty(newObj, key, value);
            }
        }
    }

    createObjectRecursive(obj, newObj);

    return newObj;
}

function defineImmutableProperty(obj, key, value) {
    Object.defineProperty(obj, key, {
        value: value,
        writable: false,
        enumerable: true,
        configurable: false
    });
}

const originalObject = {
    name: 'John',
    age: 30,
    address: {
        country: 'USA',
        city: 'New York',
        street: {
            numer: 10,
            name: 'Broadway',
        }
    },
    hobbies: ['reading', 'cooking']
};

// Testing function to output "writable" flags
function checkImmutable(obj) {
    for (let key in obj) {
        console.log(`${key} writable: ${Object.getOwnPropertyDescriptor(obj, key).writable}`);
        console.log(`${key} configurable: ${Object.getOwnPropertyDescriptor(obj, key).configurable}`);
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            checkImmutable(obj[key]);
        }
    }
}

const immutableObject = createImmutableObject(originalObject);
checkImmutable(immutableObject); // should be all false

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com"
};

const immutablePerson = createImmutableObject(person);
checkImmutable(immutablePerson); // should be all false