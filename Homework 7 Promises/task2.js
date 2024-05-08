"use strict";

function promiseAllSettled(promises) {
    const resArr = [];

    return new Promise((resolve) => {
        promises.forEach((promise, index) => {
            promise.then(value => {
                resArr[index] = { status: 'fulfilled', value };
            }).catch(reason => {
                resArr[index] = { status: 'rejected', reason };
            }).finally(() => {
                if (promises.length === resArr.length) {
                    resolve(resArr);
                }
            });
        });
    });
}

const funcs = [
    Promise.resolve(1),
    Promise.reject("Error occurred"),
    Promise.resolve(3)
];

promiseAllSettled(funcs)
    .then(results => {
        console.log("All promises settled:", results);
        // Expected: [{ status: 'fulfilled', value: 1 },
        //            { status: 'rejected', reason: 'Error occurred' },
        //            { status: 'fulfilled', value: 3 }]
    });