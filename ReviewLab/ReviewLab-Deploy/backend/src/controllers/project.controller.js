const { validationResult } = require('express-validator');
const ProjectModel = require('../models/project.model');

exports.createProject = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: 'error',
        message: 'Validation error',
        errors: errors.array()
      });
    }

    const { title, description, category, image_url } = req.body;
    const userId = req.user.userId;

    const newProject = await ProjectModel.create(userId, title, description, category, image_url);

    return res.status(201).json({
      status: 'success',
      message: 'Project created successfully',
      project: newProject
    });
  } catch (err) {
    next(err);
  }
};

exports.listProjects = async (req, res, next) => {
  try {
    const projects = await ProjectModel.getAll();

    return res.status(200).json({
      status: 'success',
      data: projects,
      count: projects.length
    });
  } catch (err) {
    next(err);
  }
};

exports.getProjectDetail = async (req, res, next) => {
  try {
    const { id } = req.params;

    const project = await ProjectModel.getById(id);
    if (!project) {
      return res.status(404).json({
        status: 'error',
        message: 'Project not found'
      });
    }

    return res.status(200).json({
      status: 'success',
      data: project
    });
  } catch (err) {
    next(err);
  }
};
