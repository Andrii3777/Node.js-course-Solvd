const { NonFictionBook, FictionBook } = require('./classes/book');
const { User } = require('./classes/user');
const { BookDatabase } = require('./classes/bookDatabase');
const { UserDatabase } = require('./classes/userDatabase');
const { Cart } = require('./classes/cart');
const { Order } = require('./classes/order');
const { BankAccount } = require('./classes/bankAccount');

// Creating a book database instance
const bookDatabase = new BookDatabase();

// Creating instances of FictionBook and NonFictionBook
const fictionBook1 = new FictionBook("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565", 10.99, 10, true, "Classic");
const fictionBook2 = new FictionBook("To Kill a Mockingbird", "Harper Lee", "9780061120084", 12.50, 5, true, "Classic2");
const fictionBook3 = new FictionBook("1984", "George Orwell", "9780451524935", 9.99, 8, true, "Classic2");
const fictionBook4 = new FictionBook("The Catcher in the Rye", "J.D. Salinger", "9780316769488", 8.99, 12, true, "Classic2");

const nonFictionBook1 = new NonFictionBook("Sapiens: A Brief History of Humankind", "Yuval Noah Harari", "9780062316097", 15.99, 15, true, "History");
const nonFictionBook2 = new NonFictionBook("Educated: A Memoir", "Tara Westover", "9780399590504", 14.75, 20, true, "Autobiography");
const nonFictionBook3 = new NonFictionBook("The Power of Habit: Why We Do What We Do in Life and Business", "Charles Duhigg", "9780812981605", 11.25, 10, true, "Psychology");
const nonFictionBook4 = new NonFictionBook("Quiet: The Power of Introverts in a World That Can't Stop Talking", "Susan Cain", "9780307352149", 13.45, 7, true, "Psychology");

// Adding books to the book database
bookDatabase.addBook(fictionBook1);
bookDatabase.addBook(fictionBook2);
bookDatabase.addBook(fictionBook3);
bookDatabase.addBook(fictionBook4);

bookDatabase.addBook(nonFictionBook1);
bookDatabase.addBook(nonFictionBook2);
bookDatabase.addBook(nonFictionBook3);
bookDatabase.addBook(nonFictionBook4);

// Removing a book from the book database
bookDatabase.removeBook(fictionBook1.ISBN);

// Searching for books in the database based on a criteria
bookDatabase.searchBooks("Psychology");

// Creating a user database instance
const userDatabase = new UserDatabase();

// Creating instances of User
const user1 = new User("Alice", "alice@example.com", 1);
const user2 = new User("Bob", "bob@example.com", 2);
const user3 = new User("Anna", "anna@example.com", 3);

// Aadding/deleting users to the user database
userDatabase.addUser(user1);
userDatabase.addUser(user2);
userDatabase.addUser(user3);
userDatabase.removeUser(user3.userId);

// Creating a cart instance for a user
const cart1 = new Cart(userDatabase.getUserById(1));

// Adding/removing books from the cart
const selectedFictionBook2 = bookDatabase.getBookByISBN(fictionBook2.ISBN);
const selectedNonFictionBook1 = bookDatabase.getBookByISBN(nonFictionBook1.ISBN);
const selectedNonFictionBook2 = bookDatabase.getBookByISBN(nonFictionBook2.ISBN);

cart1.addBook(selectedFictionBook2);
cart1.addBook(selectedNonFictionBook1);
cart1.addBook(selectedNonFictionBook2);
cart1.removeBook(selectedFictionBook2.ISBN);

// Creating an order based on the contents of the cart
const order1 = new Order(cart1);
// Applying discounts to the order
order1.applyDiscounts();
// Displaying the order details
order1.displayOrder();

// Creating instances of BankAccount for a user and a bookstore owner
const user1BankAccount = new BankAccount("Alice", "alice@example.com", 1, 1000);
const bookstoreOwnerBankAccount = new BankAccount("Tom", "tom@example.com", 2);

console.log('\nUser 1 balance: ', user1BankAccount.formattedBalance);
console.log('Bookstore owner balance: ', bookstoreOwnerBankAccount.formattedBalance);

// Performing a transaction where the user pays the total price of the order to the bookstore owner
user1BankAccount.transfer(order1.totalPrice, bookstoreOwnerBankAccount);

console.log('\nUser 1 balance: ', user1BankAccount.formattedBalance);
console.log('Bookstore owner balance: ', bookstoreOwnerBankAccount.formattedBalance);