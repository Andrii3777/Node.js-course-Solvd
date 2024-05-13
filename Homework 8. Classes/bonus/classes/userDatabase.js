// UserDatabase class to represent users database
class UserDatabase {
    /**
     * Represents a database of users.
     * @constructor
     */
    constructor() {
        this.users = []; // Array to store user objects
    }

    /**
     * Retrieves a user from the user database by user ID.
     * @param {number} userId - The ID of the user to retrieve.
     * @returns {User|null} The user object if found, or null if not found.
     */
    getUserById(userId) {
        return this.users.find(user => user.userId === userId) || null;
    }

    /**
     * Adds a user to the user database.
     * @param {User} user - The user to be added to the database.
     */
    addUser(user) {
        this.users.push(user);
        console.log(`\nUser "${user.name}" was added to the user database.`);
    }

    /**
     * Removes a user from the user database by user ID.
     * @param {string} userId - The ID of the user to be removed.
     */
    removeUser(userId) {
        const index = this.users.findIndex(user => user.userId === userId);

        if (index !== -1) {
            this.users.splice(index, 1);
            console.log(`\nUser with ID "${userId}" was removed from the user database.`);
        } else {
            console.log(`\nUser with ID "${userId}" is not in the user database.`);
        }
    }
}

module.exports = { UserDatabase };