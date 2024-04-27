// Task 5: Array Performance Analysis
module.exports = {
    measureArrayPerformance,
    customMap,
    customFilter,
    customReduce
};

function measureArrayPerformance(func, arr) {
    const start = performance.now();
    func(arr);
    const end = performance.now();
    return end - start;
}

function customMap(callback) {
    const res = [];

    for (let i = 0; i < this.length; i++) {
        res.push(callback(this[i], i, this));
    }

    return res;
};

function customFilter(callback) {
    const res = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            res.push(this[i]);
        }
    }

    return res;
};

function customReduce(callback, initialValue) {
    let accumulator = initialValue === undefined ? this[0] : initialValue;

    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
};