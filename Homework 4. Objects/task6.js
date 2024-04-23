// Task 6: Object Deep Cloning

function deepCloneObject(obj) {
    const cloneObj = {};

    // Store original and cloned objects to handle circular references
    const circularMap = new WeakMap();
    circularMap.set(obj, cloneObj);

    function deepCloneRecursive(obj, deepClone) {
        for (let key in obj) {
            const value = obj[key];

            if (value !== null && typeof value === 'object') {
                if (circularMap.has(value)) {
                    deepClone[key] = circularMap.get(obj);
                } else {
                    deepClone[key] = Array.isArray(value) ? [] : {};
                    circularMap.set(value, deepClone[key]);
                    deepCloneRecursive(value, deepClone[key]);
                }
            } else {
                deepClone[key] = value;
            }
        }
    }

    deepCloneRecursive(obj, cloneObj);

    return cloneObj;
}

const obj = {
    a: [[{}, 350]],
    b: {
        c: {
            d: 2,
            e: {
                f: 3
            }
        }
    }
};

// Create circular references
obj.b.circularRef = obj.b;
obj.circularRef = obj;

const clonedObj = deepCloneObject(obj);

console.log('clonedObj: ', clonedObj);

console.log('\nCheck if cloned object has different references:');
console.log(clonedObj !== obj);
console.log(clonedObj.a !== obj.a);
console.log(clonedObj.a[0] !== obj.a[0]);
console.log(clonedObj.a[0][0] !== obj.a[0][0]);
console.log(clonedObj.b !== obj.b);
console.log(clonedObj.b.c !== obj.b.c);
console.log(clonedObj.b.c.e !== obj.b.c.e);

console.log('\nCheck if cyclic reference remained:');
console.log(clonedObj.circularRef === clonedObj);
console.log(clonedObj.b.circularRef === clonedObj.b);