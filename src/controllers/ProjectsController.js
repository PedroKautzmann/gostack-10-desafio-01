const projects = require('../models/Projects');

module.exports = {
  index(req, res) {
    return res.json(projects);
  },

  store(req, res) {
    const { id } = req.body;
    const { title } = req.body;

    const project = {
      id,
      title,
      tasks: []
    };

    projects.push(project);

    return res.json(projects);
  },

  update(req, res) {
    const { id } = req.params;
    const { title } = req.body;

    const project = projects.find(p => p.id == id);

    project.title = title;

    return res.json(project);
  },

  destroy(req, res) {
    const { id } = req.params;

    const projectIndex = projects.findIndex(p => p.id == id);

    projects.splice(projectIndex, 1);

    return res.send();
  }
};
