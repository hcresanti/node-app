import express from "express";
import { getAllUsers, getUserWithID, createUser, deleteUser, patchUser } from "../controllers/users.js"

const router = express.Router();

let users = []

// GET users
router.get('/', getAllUsers);

// GET users/id
router.get('/:id', getUserWithID);

// POST user
router.post('/', createUser);

// DELETE user/id
router.delete('/:id', deleteUser);

// PATCH user/id
router.patch('/:id', patchUser);



export default router;