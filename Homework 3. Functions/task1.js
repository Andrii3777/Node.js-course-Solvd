// Task 1: Immutability and Pure Functions
module.exports = { calculateDiscountedPrice, calculateTotalPrice };

function calculateDiscountedPrice(products, discountPercentage) {
    const discountedPrices = [];

    for (let i = 0; i < products.length; i++) {
        discountedPrices.push(products[i] - products[i] / 100 * discountPercentage[i]);
    }

    return discountedPrices;
}

function calculateTotalPrice(products) {
    return products.reduce((acc, cur) => acc + cur);
}