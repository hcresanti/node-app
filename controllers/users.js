import { v4 as uuidv4 } from "uuid";

// Returns all users
export const getAllUsers = (req, res) => {
    res.send(users);
}

// Returns user with ID
export const getUserWithID = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id == id);

    res.send(foundUser)
}

// Creates a new user with new ID
export const createUser = (req, res) => {
    const user = req.body;
    const userWithId = { ...user, id: uuidv4() }

    users.push({ ...user, id: uuidv4() });

    res.send(`Added user: ${user.firstName} ${user.lastName}`);
}

// Deletes user with ID
export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`Deleted user with ID: ${id}`)
}

// Patch fields of existing user with ID
export const patchUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const foundUser = users.find((user) => user.id == id);

    console.log(req.body)

    if (firstName) foundUser.firstName = firstName;
    if (lastName) foundUser.lastName = lastName;
    if (age) foundUser.age = age;

    res.send(`Updated user with ID: ${id}`)
}