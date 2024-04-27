// Task 2: Array Chunking
module.exports = { chunkArray };

function chunkArray(array, chunkSize) {
    const res = [];
    let index = 0;

    while (index + chunkSize <= array.length) {
        res.push(array.slice(index, index + chunkSize));
        index += chunkSize;
    }

    return res;
}