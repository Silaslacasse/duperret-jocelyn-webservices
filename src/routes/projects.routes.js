import express from 'express';
import projectsController from '../controllers/projets.controller.js'
import {authentication, isAdmin} from '../middleware/auth.js';
import { cache } from '../middleware/cache.js';

const router = express.Router();

router.get('/', cache,  projectsController.getAllProjects);//laisser open
router.get('/:id', cache, projectsController.getProjectById);//laisser open
router.post('/', authentication, isAdmin, projectsController.createProject);
router.put('/:id',  authentication, isAdmin, projectsController.updateProject);
router.delete('/:id', authentication, isAdmin, projectsController.deleteProject);

export default router;