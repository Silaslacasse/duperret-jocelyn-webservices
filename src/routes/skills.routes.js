import express from 'express';
import skilsController from '../controllers/skills.controller.js'
import {isAdmin} from '../middleware/auth.js';
import { cache } from '../middleware/cache.js';

const router = express.Router();

router.get('/', cache, skilsController.getAllSkills);
router.get('/:id', cache, skilsController.getSkillById);
router.post('/', isAdmin, skilsController.createSkill);
router.put('/:id', isAdmin, skilsController.updateSkill);
router.delete('/:id', isAdmin, skilsController.deleteSkill);

export default router;
