// Task 2: Object Property Enumeration and Deletion

const product = {
    name: "Laptop",
    price: 1000,
    quantity: 5
};

Object.defineProperty(product, 'price', {
    writable: false,
    enumerable: false,
    configurable: true
});

Object.defineProperty(product, 'quantity', {
    writable: false,
    enumerable: false,
    configurable: true
});

function getTotalPrice(product) {
    const priceDescriptor = Object.getOwnPropertyDescriptor(product, 'price');
    const quantityDescriptor = Object.getOwnPropertyDescriptor(product, 'quantity');

    return priceDescriptor.value * quantityDescriptor.value;
}

console.log('getTotalPrice():', getTotalPrice(product) === 5000);

function deleteNonConfigurable(obj, prop) {
    if (prop in obj) {
        const descriptor = Object.getOwnPropertyDescriptor(obj, prop);

        if (!descriptor.configurable) {
            throw new Error(`Property '${prop}' is non-configurable!`);
        }

        delete obj[prop];
    }
}

deleteNonConfigurable(product, 'name');
console.log('product.name:', product.name === undefined);
console.log('product.price:', product.price === 1000);
console.log('product.quantity:', product.quantity === 5);