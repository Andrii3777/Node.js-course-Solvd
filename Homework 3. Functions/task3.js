// Task 3: Closures and Higher-Order Functions
module.exports = { createCounter, repeatFunction };

function createCounter() {
    let counter = 0;

    return function () {
        return ++counter;
    };
}

function repeatFunction(func, callNum) {
    if (callNum < 0) {
        return function (...args) {
            while (true) {
                func(...args);
            }
        };
    } else {
        return function (...args) {
            for (let i = 0; i < callNum; i++) {
                func(...args);
            }
        };
    }
}