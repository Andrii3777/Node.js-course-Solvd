// Task 4: Array Intersection and Union
module.exports = { getArrayIntersection, getArrayUnion, getArrayUnion2 };

function getArrayIntersection(arr1, arr2) {
    return arr1.filter(el => arr2.includes(el));
}

function getArrayUnion(arr1, arr2) {
    const unionArr = [...arr1, ...arr2];
    const uniqueSet = new Set(unionArr);

    return [...uniqueSet];
}

// Implementation without Set
function getArrayUnion2(arr1, arr2) {
    const unionArr = [...arr1, ...arr2];
    const uniqueSet = uniqueElements(unionArr);

    return [...uniqueSet];
}

function uniqueElements(arr) {
    const uniqueArray = [];

    arr.forEach((item) => {
        if (!uniqueArray.includes(item)) {
            uniqueArray.push(item);
        }
    });

    return uniqueArray;
}