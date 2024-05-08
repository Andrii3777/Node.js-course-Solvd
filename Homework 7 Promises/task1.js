"use strict";

function promiseAll(promises) {
    const resArr = [];

    return new Promise((resolve, reject) => {
        for (const promise of promises) {
            promise.then(res => {
                resArr.push(res);
                if (promises.length === resArr.length) {
                    resolve(resArr);
                }
            }).catch(err => reject(err));
        }
    });
}

// async/await version of promiseAll() function
async function promiseAll_2(promises) {
    const resArr = [];

    try {
        for (const promise of promises) {
            resArr.push(await promise);
        }

        return resArr;
    } catch (err) {
        throw err;
    }
}

const promises = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
];

promiseAll(promises)
    .then(results => {
        console.log("All promises resolved:", results); // Expected: [1, 2, 3]
    })
    .catch(error => {
        console.error("At least one promise rejected:", error);
    });

promiseAll([Promise.reject(0), ...promises])
    .then(results => {
        console.log("All promises resolved:", results);
    })
    .catch(error => {
        console.error("At least one promise rejected:", error); // Expected: 0
    });

// async/await version of promiseAll() test
promiseAll_2(promises)
    .then(results => {
        console.log("All promises resolved:", results); // Expected: [1, 2, 3]
    })
    .catch(error => {
        console.error("At least one promise rejected:", error);
    });

promiseAll_2([Promise.reject(0), ...promises])
    .then(results => {
        console.log("All promises resolved:", results);
    })
    .catch(error => {
        console.error("At least one promise rejected:", error); // Expected: 0
    });