// Task 1: Advanced Array Filtering
module.exports = { customFilterUnique };

function customFilterUnique(array, callback) {
    const uniqueArray = [];
    const uniqueProps = [];

    array.forEach(element => {
        const value = callback(element);

        if (typeof value !== 'undefined' && !uniqueProps.includes(value)) {
            uniqueArray.push(element);
            uniqueProps.push(value);
        }
    });

    return uniqueArray;
}