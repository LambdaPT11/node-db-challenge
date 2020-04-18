const db = require('../data/db-config.js');

module.exports = {
    getProjects
};

// fetch all projects
function getProjects() {
    return db('projects')
}