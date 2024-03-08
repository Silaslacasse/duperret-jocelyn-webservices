import express from 'express';
import usersController from '../controllers/users.controller.js'
import {isAdmin} from '../middleware/auth.js';
import { cache } from '../middleware/cache.js';

const router = express.Router();

router.get('/', cache, usersController.getAllUsers);
router.get('/:id', cache, usersController.getUserById);
router.post('/', usersController.createUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', isAdmin, usersController.deleteUser);

export default router;