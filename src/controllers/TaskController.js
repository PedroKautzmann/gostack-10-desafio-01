const projects = require('../models/Projects');

module.exports = {
  store(req, res) {
    const { id } = req.params;
    const { title } = req.body;

    const project = projects.find(p => p.id == id);

    project.tasks.push(title);

    return res.json(project);
  }
};
