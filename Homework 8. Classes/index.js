// Book class to represent individual books
class Book {
    /**
     * Represents a book.
     * @constructor
     * @param {string} title - The title of the book.
     * @param {string} author - The author of the book.
     * @param {string} ISBN - The ISBN (International Standard Book Number) of the book.
     * @param {number} price - The price of the book.
     * @param {boolean} availability - The availability of the book.
     */
    constructor(title, author, ISBN, price, availability) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.price = price;
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
     * @param {boolean} availability - The availability of the book.
     * @param {string} genre - The genre of the fiction book.
     */
    constructor(title, author, ISBN, price, availability, genre) {
        super(title, author, ISBN, price, availability);
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
     * @param {boolean} availability - The availability of the book.
     * @param {string} category - The category of the non-fiction book.
     */
    constructor(title, author, ISBN, price, availability, category) {
        super(title, author, ISBN, price, availability);
        this.category = category;
    }
}

// User class to represent users of the bookstore
class User {
    /**
     * Represents a user of the bookstore.
     * @constructor
     * @param {string} name - The name of the user.
     * @param {string} email - The email address of the user.
     * @param {number} userId - The unique ID of the user.
     */
    constructor(name, email, userId) {
        this.name = name;
        this.email = email;
        this.userId = userId;
    }
}

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
            console.log(`\n"${book.title}" added to the cart.`);
        } else {
            console.log(`\n"${book.title}" is out of stock.`);
        }
    }

    /**
     * Removes a book from the cart.
     * @param {Book} book - The book to be removed from the cart.
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
        console.log('\nCart total price: $', total);
        return total;
    }
}

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
     * Displays the details of the order.
     */
    displayOrder() {
        console.log(`\nOrder placed by ${this.user.name}:`);
        this.books.forEach(book => {
            console.log(`\n${book.title} by ${book.author} - $${book.price}`);
        });
        console.log(`\nTotal price:  $${this.totalPrice}`);
    }
}

// Instantiate objects and simulate bookstore interactions...

// Creating instances of books
const fictionBook1 = new FictionBook("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565", 10.99, true, "Classic");
const fictionBook2 = new FictionBook("To Kill a Mockingbird", "Harper Lee", "9780061120084", 12.50, true, "Classic");

const nonFictionBook1 = new NonFictionBook("Sapiens: A Brief History of Humankind", "Yuval Noah Harari", "9780062316097", 15.99, true, "History");
const nonFictionBook2 = new NonFictionBook("Educated: A Memoir", "Tara Westover", "9780399590504", 14.75, true, "Autobiography");

// Creating instances of users
const user1 = new User("Alice", "alice@example.com", 1);
const user2 = new User("Bob", "bob@example.com", 2);

// Creating a cart for user1 and adding/removing books
const cart1 = new Cart(user1);
cart1.addBook(fictionBook1);
cart1.addBook(fictionBook2);
cart1.addBook(nonFictionBook1);
cart1.addBook(nonFictionBook2);
cart1.removeBook(fictionBook2.ISBN);

// Creating an order from cart1 and displaying the order details
const order1 = new Order(cart1);
order1.displayOrder();