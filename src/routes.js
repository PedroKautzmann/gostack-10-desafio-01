const { Router } = require('express');
const ProjectsController = require('./controllers/ProjectsController');
const TaskController = require('./controllers/TaskController');
const countRequests = require('./middlewares/CountRequests');
const checkProjectExists = require('./middlewares/CheckProjectExists');

const routes = Router();

routes.use(countRequests);

routes.get('/projects', ProjectsController.index);

routes.post('/projects', ProjectsController.store);

routes.put('/projects/:id', checkProjectExists, ProjectsController.update);

routes.delete('/projects/:id', checkProjectExists, ProjectsController.destroy);

routes.post('/projects/:id/tasks', checkProjectExists, TaskController.store);

module.exports = routes;
