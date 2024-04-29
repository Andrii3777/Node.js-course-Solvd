"use strict";
// Challenge (optional)

function extendedCurry(func, arity) {
    const placeholder = '_';

    return function curried(...args) {
        if (args.includes(placeholder)) {
            args.splice(args.indexOf(placeholder), 1);
        }
        if (args.length >= arity) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, [...args, ...args2]);
            }
        }
    };
}

function multiply(a, b, c) {
    return a * b * c;
}

const curriedMultiply = extendedCurry(multiply, 3);

const step1 = curriedMultiply('_')(2);
const step2 = step1(3);
const result = step2('_')(4);

console.log("Result:", result); // Expected: 24
console.log("Result:", curriedMultiply('_')(2)('_')('_')(3)(4)); // Expected: 24