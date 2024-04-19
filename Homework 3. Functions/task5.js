// Task 5: Lazy Evaluation and Generators
module.exports = { lazyMap, fibonacciGenerator };

function lazyMap(arr, mapfunc) {
    let index = 0;
    return {
        next: function () {
            return mapfunc(arr[index++]);
        }
    };
}

function fibonacciGenerator() {
    let prev = 1;
    let beforePrev = 0;

    return {
        next: function () {
            const cur = prev + beforePrev;
            beforePrev = prev;
            prev = cur;
            return cur;
        }
    }
}