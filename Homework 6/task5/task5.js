"use strict";
// Task 5: Implementing Throttle Function

function throttle(func, interval) {
    let funcCallTime = performance.now();

    return function (...args) {
        const hasElapsed = (performance.now() - funcCallTime) >= interval;

        if (hasElapsed) {
            funcCallTime = performance.now();
            func.call(this, ...args);
        }
    };
}

function onScroll(event) {
    // Handle scroll event
    console.log("Scroll event:", event);
}

const throttledScrollHandler = throttle(onScroll, 1000);

window.addEventListener("scroll", throttledScrollHandler);