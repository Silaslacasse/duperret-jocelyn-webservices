import express from 'express';
import projectsRouter from './projects.routes.js'
import skillsRouter from './skills.routes.js'
import usersRouter from './users.routes.js'
import authenticationRouter from './auth.routes.js' 
import {authentication} from '../middleware/auth.js';


const router = express.Router()
router.use('/projects', projectsRouter)
router.use('/skills', authentication, skillsRouter)
router.use('/users', authentication, usersRouter)
router.use('/auth', authenticationRouter)

export default router