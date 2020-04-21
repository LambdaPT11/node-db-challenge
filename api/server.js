const express = require('express');

// const ProjectRouter = require('./projects/project-router.js');
// const TaskRouter = require('./tasks/task-router.js');
const ResourceRouter = require('../router/resource-router.js');

const server = express();

server.use(express.json());
// server.use('/api/projects', ProjectRouter);
// server.use('/api/tasks', TaskRouter);
server.use('/api/resources', ResourceRouter);

module.exports = server;