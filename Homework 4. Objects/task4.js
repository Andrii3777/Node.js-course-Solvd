// Task 4: Advanced Property Descriptors

function createImmutableObject(obj) {
    const newObj = {};

    function createObjectRecursive(obj, newObj) {
        for (let key in obj) {
            const value = obj[key];

            if (value !== null && typeof value === 'object') {
                const newValue = Array.isArray(obj) ? [] : {};
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
        configurable: true
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
function checkWritable(obj) {
    for (let key in obj) {
        console.log(`${key}: ${Object.getOwnPropertyDescriptor(obj, key).writable}`);
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            checkWritable(obj[key]);
        }
    }
}

const immutableObject = createImmutableObject(originalObject);
checkWritable(immutableObject); // should be all false

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com"
};

const immutablePerson = createImmutableObject(person);
checkWritable(immutablePerson); // should be all false