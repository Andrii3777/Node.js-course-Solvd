// Task 5: Object Observation

function observeObject(obj, callback) {
    const proxy = new Proxy(obj, {
        get(target, prop) {
            callback(prop, 'get');
            return target[prop];
        },
        set(target, prop, value) {
            callback(prop, 'set');
            target[prop] = value;
            return true;
        }
    });

    return proxy;
}

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com"
};

const proxyPerson = observeObject(person, (prop, action) => {
    console.log(`Action "${action}" was perfomed on property "${prop}".`);
});

proxyPerson.name;
proxyPerson.age = 31;