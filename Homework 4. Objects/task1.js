// Task 1: Object Property Manipulation
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com"
};

for (let key in person) {
    Object.defineProperty(person, key, {
        writable: false,
        enumerable: true,
        configurable: true
    });
}

// Throws an error in strict mode
person.firstName = "newValue";
person.lastName = "newValue";
person.age = 40;
person.email = "newValue";

console.log('person.firstName:', person.firstName === "John");
console.log('person.lastName:', person.lastName === "Doe");
console.log('person.age:', person.age === 30);
console.log('person.email:', person.email === "john.doe@example.com");

person.updateInfo = function (newInfo) {
    for (let key in newInfo) {
        if (key in person && Object.getOwnPropertyDescriptor(this, key).writable) {
            person[key] = newInfo[key];
        }
    }
}

Object.defineProperty(person, 'address', {
    value: {},
    writable: true,
    enumerable: false,
    configurable: false
});

person.updateInfo({ firstName: "Jane", age: 32, address: "New address" });
console.log('person.firstName:', person.firstName === "John");
console.log('person.age:', person.age === 30);
console.log('person.address:', person.address === "New address");

// Throws an error in strict mode
delete person.address;

// "address" property is missing from the loop:
for (let key in person) console.log(key);

console.log('person.address:', person.address);