import express from 'express';
import authenticationController from '../controllers/authentication.controller.js'

const router = express.Router();

router.post('/login', authenticationController.login);
router.get('/refreshToken', authenticationController.refreshToken);

export default router;