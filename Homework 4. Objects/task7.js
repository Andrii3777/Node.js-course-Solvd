// Task 7: Object Property Validation

function validateObject(obj, validSchema) {
    const validProps = validSchema.properties;

    for (const key in validProps) {
        if (validProps[key].required && !obj.hasOwnProperty(key)) {
            console.error(`Required property "${key}" is absent!`);
            return false;
        }

        if (obj.hasOwnProperty(key) && (typeof obj[key] !== validProps[key].type)) {
            console.error(`Invalid property "${key}" type!`);
            return false;
        }

        if (obj.hasOwnProperty(key) && !validProps[key].isValid.call(obj)) {
            console.error(`Invalid property "${key}" format!`);
            return false;
        }
    }

    return true;
}

const personSchema = {
    title: 'Person',
    description: 'Person data',
    type: 'object',
    properties: {
        firstName: {
            type: 'string',
            required: true,
            description: "First name",
            isValid: function () {
                const fisrtNameRegex = /^[a-z,.'-]+$/i;
                return fisrtNameRegex.test(this.firstName);
            }
        },
        lastName: {
            type: 'string',
            required: true,
            description: "Last name",
            isValid: function () {
                const fisrtNameRegex = /^[a-z,.'-]+$/i;
                return fisrtNameRegex.test(this.firstName);
            }
        },
        age: {
            type: 'number',
            required: true,
            description: "Age",
            isValid: function () {
                return this.age >= 0;
            }
        },
        email: {
            type: 'string',
            required: true,
            description: "Email",
            isValid: function () {
                const emailRegex = /^(?![-.+])[a-zA-Z\d-.+]{2,20}@[\w.!$%&’*+/=?^-]{1,15}\.[a-zA-Z\d-.+]{1,5}$/;
                return emailRegex.test(this.email);
            }
        },
        phoneNumber: {
            type: 'string',
            required: false,
            description: "Phone number",
            isValid: function () {
                const phoneNumberRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
                return phoneNumberRegex.test(this.phoneNumber);
            }
        },
    }
};

const validPerson = {
    firstName: "Bob",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
    phoneNumber: "+31636363634"
};

// Invalid property "age" format!
const invalidPerson1 = {
    firstName: "Bob",
    lastName: "Doe",
    age: -30,
    email: "john.doe@example.com",
    phoneNumber: "+31636363634"
};

// Invalid property "phoneNumber" format!
const invalidPerson2 = {
    firstName: "Bob",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
    phoneNumber: "+316363636342342342"
};

// Invalid property "email" format!
const invalidPerson3 = {
    firstName: "Bob",
    lastName: "Doe",
    age: 30,
    email: "john.doeexample.com",
    phoneNumber: "+316363636342342342"
};

console.log(validateObject(validPerson, personSchema));
console.log(validateObject(invalidPerson1, personSchema));
console.log(validateObject(invalidPerson2, personSchema));
console.log(validateObject(invalidPerson3, personSchema));