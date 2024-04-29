"use strict";
// Task 4: Implementing Debounce Function

function debounce(func, delay) {
    let timeout;

    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.call(this, ...args), delay);
    };
}

// Example usage:
function debouncedSearch(query) {
    // Perform search operation with the query
    console.log("Searching for:", query);
}

const debouncedSearchHandler = debounce(debouncedSearch, 300);

const inputElement = document.getElementById("search-input");
inputElement.addEventListener("input", event => {
    debouncedSearchHandler(event.target.value);
});