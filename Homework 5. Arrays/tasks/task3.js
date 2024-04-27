// Task 3: Array Shuffling
module.exports = { customShuffle };

function customShuffle(array) {
    const shuffledArr = Array(array.length);
    const indexes = Array(array.length);

    for (let i = 0; i < array.length; i++) {
        indexes[i] = i;
    }

    for (let i = 0; i < array.length; i++) {
        // Generate random index within the remaining indexes
        let randomIndex = genRandomIndex(indexes.length);
        // Save random index element from original array to the shuffled array
        shuffledArr[i] = array[indexes[randomIndex]];
        // Delete used rand index from "indexes" array
        indexes.splice(randomIndex, 1);
    }

    return shuffledArr;
}

// Generate a random number between 0 (inclusive) and length (exclusive)
function genRandomIndex(length) {
    return Math.floor(Math.random() * length);
}