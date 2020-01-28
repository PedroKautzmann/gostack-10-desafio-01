const projects = require('../models/Projects');

function checkProjectExists(req, res, next) {
  const { id } = req.params;

  const project = projects.find(p => p.id == id);

  if (!project) {
    return res.status(400).json({ error: 'Project does not exists' });
  }

  return next();
}

module.exports = checkProjectExists;
