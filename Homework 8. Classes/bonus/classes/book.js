// Book class to represent individual books
class Book {
    /**
     * Represents a book.
     * @constructor
     * @param {string} title - The title of the book.
     * @param {string} author - The author of the book.
     * @param {string} ISBN - The ISBN (International Standard Book Number) of the book.
     * @param {number} price - The price of the book.
     * @param {number} discount - The discount of the book.
     * @param {boolean} availability - The availability of the book.
     */
    constructor(title, author, ISBN, price, discount, availability) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.price = price;
        this.discount = discount;
        this.availability = availability;
    }
}

// FictionBook class representing a fiction book, inheriting from Book class
class FictionBook extends Book {
    /**
     * Represents a fiction book.
     * @constructor
     * @param {string} title - The title of the book.
     * @param {string} author - The author of the book.
     * @param {string} ISBN - The ISBN of the book.
     * @param {number} price - The price of the book.
     * @param {number} discount - The discount of the book.
     * @param {boolean} availability - The availability of the book.
     * @param {string} genre - The genre of the fiction book.
     */
    constructor(title, author, ISBN, price, discount, availability, genre) {
        super(title, author, ISBN, price, discount, availability);
        this.genre = genre;
    }
}

// NonFictionBook class representing a non-fiction book, inheriting from Book class
class NonFictionBook extends Book {
    /**
     * Represents a non-fiction book.
     * @constructor
     * @param {string} title - The title of the book.
     * @param {string} author - The author of the book.
     * @param {string} ISBN - The ISBN of the book.
     * @param {number} price - The price of the book.
     * @param {number} discount - The discount of the book.
     * @param {boolean} availability - The availability of the book.
     * @param {string} category - The category of the non-fiction book.
     */
    constructor(title, author, ISBN, price, discount, availability, category) {
        super(title, author, ISBN, price, discount, availability);
        this.category = category;
    }
}

module.exports = { NonFictionBook, FictionBook };