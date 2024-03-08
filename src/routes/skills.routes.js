import express from 'express';
import skilsController from '../controllers/skills.controller.js'
import {isAdmin} from '../middleware/auth.js';

const router = express.Router();

router.get('/', skilsController.getAllSkills);
router.get('/:id', skilsController.getSkillById);
router.post('/', isAdmin, skilsController.createSkill);
router.put('/:id', isAdmin, skilsController.updateSkill);
router.delete('/:id', isAdmin, skilsController.deleteSkill);

export default router;
