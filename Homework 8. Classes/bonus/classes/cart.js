// Cart class to simulate a shopping cart
class Cart {
    /**
     * Represents a shopping cart.
     * @constructor
     * @param {User} user - The user who owns the cart.
     */
    constructor(user) {
        this.user = user;
        this.books = [];
    }

    /**
     * Adds a book to the cart.
     * @param {Book} book - The book to be added to the cart.
     */
    addBook(book) {
        if (book.availability) {
            this.books.push(book);
            console.log(`\nBook "${book.title}" added to the cart.`);
        } else {
            console.log(`\n"${book.title}" is out of stock.`);
        }
    }

    /**
     * Removes a book from the cart by its ISBN.
     * @param {string} ISBN - The ISBN of the book to be removed.
     */
    removeBook(ISBN) {
        const index = this.books.findIndex(book => book.ISBN === ISBN);

        if (index !== -1) {
            this.books.splice(index, 1);
            console.log(`\nBook with ISBN "${ISBN}" removed from the cart.`);
        } else {
            console.log(`\nBook with ISBN "${ISBN}" is not in the cart.`);
        }
    }

    /**
     * Calculates the total price of all books in the cart.
     * @returns {number} The total price of all books in the cart.
     */
    calculateTotal() {
        const total = this.books.reduce((acc, book) => acc + book.price, 0).toFixed(2);
        console.log(`\nCart total price: $${total}`);

        return total;
    }
}

module.exports = { Cart };