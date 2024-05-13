# <div align="center">Bookstore</div>
An object-oriented program simulates the functioning of an online bookstore.

## Book Class

The `Book` class represents individual books and provides information about them, such as title, author, ISBN, price, discount, and availability.

### Constructor

#### `new Book(title, author, ISBN, price, discount, availability)`

- `title` (string): The title of the book.
- `author` (string): The author of the book.
- `ISBN` (string): The ISBN (International Standard Book Number) of the book.
- `price` (number): The price of the book.
- `discount` (number): The discount of the book.
- `availability` (boolean): The availability of the book.

### Inheritance

#### `FictionBook` and `NonFictionBook`

- Inherits from `Book`.
- Additional properties specific to each genre:
  - `genre` (string) for `FictionBook`.
  - `category` (string) for `NonFictionBook`.

## BookDatabase Class

The `BookDatabase` class represents a database of books and provides methods to interact with the database, such as adding, removing, and searching for books.

### Constructor

#### `new BookDatabase()`

- Initializes an empty array to store books in the database.

### Methods

#### `getBookByISBN(ISBN)`

- Retrieves a book from the database by its ISBN.
- Returns the book object if found, otherwise returns null.

#### `addBook(book)`

- Adds a book to the database.
- Accepts a `Book` object as the parameter.

#### `removeBook(ISBN)`

- Removes a book from the database by its ISBN.

#### `searchBooks(criteria)`

- Searches for books in the database based on provided criteria.
- Returns an array of books matching the search criteria.

## User Class

The `User` class represents users of the bookstore and provides information such as name, email, and unique user ID.

### Constructor

#### `new User(name, email, userId)`

- `name` (string): The name of the user.
- `email` (string): The email address of the user.
- `userId` (number): The unique ID of the user.

## UserDatabase Class

The `UserDatabase` class represents a database of users and provides methods to interact with the database, such as adding, removing, and retrieving users.

### Constructor

#### `new UserDatabase()`

- Initializes an empty array to store user objects in the database.

### Methods

#### `getUserById(userId)`

- Retrieves a user from the database by user ID.
- Returns the user object if found, otherwise returns null.

#### `addUser(user)`

- Adds a user to the database.
- Accepts a `User` object as the parameter.

#### `removeUser(userId)`

- Removes a user from the database by user ID.

## Cart Class

The `Cart` class simulates a shopping cart and provides methods to add, remove, and calculate the total price of books in the cart.

### Constructor

#### `new Cart(user)`

- `user` (User): The user who owns the cart.

### Methods

#### `addBook(book)`

- Adds a book to the cart.
- Accepts a `Book` object as the parameter.

#### `removeBook(ISBN)`

- Removes a book from the cart by its ISBN.

#### `calculateTotal()`

- Calculates the total price of all books in the cart.
- Returns the total price as a number.

## Order Class

The `Order` class represents an order placed by a user and provides methods to apply discounts and display order details.

### Constructor

#### `new Order(cart)`

- `cart` (Cart): The cart containing the books to be ordered.

### Methods

#### `applyDiscounts()`

- Applies discounts to the order based on book discounts.

#### `displayOrder()`

- Displays the details of the order, including book titles, authors, prices, discounts, and total price.

## BankAccount Class

The `BankAccount` class represents a bank account and provides methods to interact with it, such as transferring funds and retrieving balance information.

### Constructor

#### `new BankAccount(name, email, accountId, balance)`

- `name` (string): The name of the account holder.
- `email` (string): The email of the account holder.
- `accountId` (string): The unique ID of the account.
- `balance` (number, optional): The initial balance of the account (defaults to 0 if not provided).

### Methods

#### `formattedBalance`

- Returns the formatted balance with a dollar sign ('$').

#### `transfer(amount, receiver)`

- `amount` (number): The amount to transfer.
- `receiver` (BankAccount): The receiver account.
- Throws an error if the sender does not have enough balance.

## **Running the app**

```bash
$ node index
```