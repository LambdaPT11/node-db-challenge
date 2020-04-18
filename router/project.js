const express = require('express');
const Scheme = require('./scheme-model.js');
const router = express.Router();

// GET - fetch all projects
router.get('/', (req, res) => {
    Scheme.getProjects()
        .then(projects => {
            projects.forEach(project => project.completed ? project.completed = true : project.completed = false)
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects.' });
        });
});

module.exports = router;
