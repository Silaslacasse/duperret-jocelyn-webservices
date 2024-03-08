import express from 'express';
import usersController from '../controllers/users.controller.js'
import {isAdmin} from '../middleware/auth.js';

const router = express.Router();

router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUserById);
router.post('/', usersController.createUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', isAdmin, usersController.deleteUser);

export default router;