import express from 'express';
import projectsController from '../controllers/projets.controller.js'
import {authentication, isAdmin} from '../middleware/auth.js';

const router = express.Router();

router.get('/', projectsController.getAllProjects);//laisser open
router.get('/:id', projectsController.getProjectById);//laisser open
router.post('/', authentication, isAdmin, projectsController.createProject);
router.put('/:id',  authentication, isAdmin, projectsController.updateProject);
router.delete('/:id', authentication, isAdmin, projectsController.deleteProject);

export default router;