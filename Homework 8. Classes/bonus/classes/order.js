// Order class to represent a user's order
class Order {
    /**
     * Represents an order placed by a user.
     * @constructor
     * @param {Cart} cart - The cart containing the books to be ordered.
     */
    constructor(cart) {
        this.user = cart.user;
        this.books = cart.books;
        this.totalPrice = cart.calculateTotal();
    }

    /**
     * Applies discounts to the order based on book discounts.
     */
    applyDiscounts() {
        // Calculate total discount amount based on each book's discount percentage
        const discountAmount = this.books.reduce(
            (acc, book) => acc + (book.price * book.discount) / 100,
            0
        );

        // Apply discounts to the total price
        this.totalPrice = (this.totalPrice - discountAmount).toFixed(2);
        console.log(`\nTotal price with discounts: $${this.totalPrice}`);
    }

    /**
     * Displays the details of the order.
     */
    displayOrder() {
        console.log(`\nOrder placed by ${this.user.name}:`);

        this.books.forEach((book, index) => {
            console.log(`${index + 1}) "${book.title}" by ${book.author}, price: $${book.price}, discount: ${book.discount}%`);
        });
        console.log(`\nTotal price: $${this.totalPrice}`);
    }
}

module.exports = { Order };