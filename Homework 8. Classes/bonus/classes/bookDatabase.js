// BookDatabase class to represent books database
class BookDatabase {
    /**
     * Constructs a new BookDatabase instance.
     * Initializes an empty array to store books.
     */
    constructor() {
        this.books = [];
    }

    /**
     * Retrieves a book from the book database by its ISBN.
     * @param {string} ISBN - The ISBN of the book to retrieve.
     * @returns {Book|null} The book object if found, or null if not found.
     */
    getBookByISBN(ISBN) {
        return this.books.find(book => book.ISBN === ISBN) || null;
    }

    /**
     * Adds a book to the book database.
     * @param {Book} book - The book to be added to the database.
     */
    addBook(book) {
        this.books.push(book);
        console.log(`\nBook "${book.title}" was added to the book database.`);
    }

    /**
     * Removes a book from the book database by its ISBN.
     * @param {string} ISBN - The ISBN of the book to be removed.
     */
    removeBook(ISBN) {
        const index = this.books.findIndex(book => book.ISBN === ISBN);

        if (index !== -1) {
            this.books.splice(index, 1);
            console.log(`\nBook with ISBN "${ISBN}" was removed from the book database.`);
        } else {
            console.log(`\nBook with ISBN "${ISBN}" is not in the book database.`);
        }
    }

    /**
     * Searches for books in the database based on provided criteria.
     * @param {string} criteria - The search criteria (e.g., title, author, ISBN).
     * @returns {Array<Book>} An array of books matching the search criteria.
     */
    searchBooks(criteria) {
        // Filters books based on whether any property matches the provided criteria
        const res = this.books.filter(book =>
            Object.values(book).some(value =>
                value === criteria
            )
        );

        console.log(`\nSearch Results for '${criteria}':`, res);
        return res;
    }
}

module.exports = { BookDatabase };
