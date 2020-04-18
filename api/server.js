const express = require('express');

const ProjectRouter = require('../router/project');

const server = express();

server.use(express.json());
server.use('/api/project', ProjectRouter);

server.get('/', (req, res) => {
    res.status(200).json({ msg: 'server is at API' });
});

module.exports = server;