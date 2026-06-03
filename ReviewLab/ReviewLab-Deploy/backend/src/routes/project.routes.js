const express = require('express');
const { body, validationResult } = require('express-validator');
const projectController = require('../controllers/project.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

const validateCreateProject = [
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('description').trim().notEmpty().withMessage('Description is required'),
  body('category').optional().trim(),
  body('image_url').optional().trim()
];

router.post('/', authMiddleware, validateCreateProject, projectController.createProject);
router.get('/', projectController.listProjects);
router.get('/:id', projectController.getProjectDetail);

module.exports = router;
