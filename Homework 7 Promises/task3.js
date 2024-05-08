"use strict";

function chainPromises(funcs) {
    let chain = funcs[0]();

    for (let i = 0; i < funcs.length; i++) {
        chain = chain.then(res => funcs[i](res));
    }

    return chain;
}

function asyncFunction1() {
    return Promise.resolve("Result from asyncFunction1");
}

function asyncFunction2(data) {
    return Promise.resolve(data + " - Result from asyncFunction2");
}

function asyncFunction3(data) {
    return Promise.resolve(data + " - Result from asyncFunction3");
}

function asyncFunction4(data) {
    return Promise.reject(data + " - Result from asyncFunction4");
}

const functionsArray = [asyncFunction1, asyncFunction2, asyncFunction3];

chainPromises(functionsArray)
    .then(result => {
        console.log("Chained promise result:", result);
        // Expected: "Result from asyncFunction1 - Result from asyncFunction2 - Result from asyncFunction3"
    })
    .catch(error => {
        console.error("Chained promise error:", error);
    });

chainPromises([...functionsArray, asyncFunction4])
    .then(result => {
        console.log("Chained promise result:", result);
    })
    .catch(error => {
        console.error("Chained promise error:", error);
        // Expected: "Result from asyncFunction1 - Result from asyncFunction2 - Result from async - Function3Result from asyncFunction4"
    });