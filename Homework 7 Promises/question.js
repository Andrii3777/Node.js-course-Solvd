"use strict";

async function promiseAll(promises) {
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

const promise1 = Promise.reject('error');
const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log("Promise with setTimeout was called!");
        resolve('setTimeout');
    }, 0);
});
const promise3 = new Promise((resolve) => {
    console.log("Just promise was called!");
    resolve('just promise');
});

const promises = [
    promise1,
    promise2,
    promise3
];

promiseAll(promises)
    .then(results => {
        console.log("All promises resolved:", results);
    })
    .catch(error => {
        console.error("At least one promise rejected:", error);
    });